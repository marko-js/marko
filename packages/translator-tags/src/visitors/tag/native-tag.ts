import { assertNoArgs, getTagDef } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";

import attrsToObject from "../../util/attrs-to-object";
import evaluate from "../../util/evaluate";
import { isStatefulReferences } from "../../util/is-stateful";
import { isOutputHTML } from "../../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../../util/references";
import { callRuntime, getHTMLRuntime } from "../../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../../util/sections";
import {
  addHTMLEffectCall,
  addStatement,
  getRegisterUID,
  getSerializedScopeProperties,
} from "../../util/signals";
import translateVar from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { currentProgramPath, scopeIdentifier } from "../program";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSerializeMarker = Symbol("serialize marker");
const kGetterId = Symbol("node getter id");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNativeTagBinding]?: Binding;
    [kSerializeMarker]?: boolean;
    [kGetterId]?: string;
  }
}

export default {
  analyze: {
    enter(tag) {
      const { node } = tag;
      const attrs = tag.get("attributes");
      const tagVar = tag.node.var;
      let hasEventHandlers = false;
      let hasDynamicAttributes = false;

      /**
       * The reason this seems like it does more work than it needs to
       * is because `evaluate` has side effects so it needs to be run
       * for every attribute that isn't an event handler or a spread
       */
      for (const attr of attrs) {
        if (isSpreadAttr(attr)) {
          (attr.node.value.extra ??= {}).isEffect = true;
          hasEventHandlers = true;
          hasDynamicAttributes = true;
          mergeReferences(
            tag,
            attrs.map((attr) => attr.node.value),
          );
        } else if (isEventHandler((attr.node as t.MarkoAttribute).name)) {
          (attr.node.value.extra ??= {}).isEffect = true;
          hasEventHandlers = true;
        } else if (!evaluate(attr).confident) {
          hasDynamicAttributes = true;
        }
      }

      if (tagVar || hasEventHandlers || hasDynamicAttributes) {
        currentProgramPath.node.extra.isInteractive ||= hasEventHandlers;
        const section = getOrCreateSection(tag);
        const tagName =
          node.name.type === "StringLiteral"
            ? node.name.value
            : t.toIdentifier(tag.get("name"));
        const tagExtra = (node.extra ??= {});
        const bindingName = "#" + tagName;
        tagExtra[kSerializeMarker] = !!tagVar || hasEventHandlers;
        tagExtra[kNativeTagBinding] = createBinding(
          bindingName,
          BindingType.dom,
          section,
        );

        if (tagVar) {
          if (t.isIdentifier(tagVar)) {
            for (const ref of tag.scope.getBinding(tagVar.name)!
              .referencePaths) {
              if (!ref.parentPath?.isCallExpression()) {
                tagExtra[kGetterId] = getRegisterUID(section, bindingName);
                break;
              }
            }
          }
        }
      }
    },
  },
  translate: {
    enter(tag) {
      assertNoArgs(tag);

      const extra = tag.node.extra!;
      const nodeRef = extra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const name = tag.get("name");
      const attrs = tag.get("attributes");
      const tagDef = getTagDef(tag);
      const hasSpread = attrs.some((attr) => attr.isMarkoSpreadAttribute());
      const write = writer.writeTo(tag);
      const section = getSection(tag);

      // TODO: throw error if var is not an identifier (like let)

      if (isHTML && extra.tagNameNullable) {
        writer.flushBefore(tag);
      }

      if (tag.has("var")) {
        const getterId = extra[kGetterId];
        if (isHTML) {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          for (const reference of references) {
            let currentSection = getSection(reference);
            while (currentSection !== section && currentSection.parent) {
              getSerializedScopeProperties(currentSection).set(
                t.stringLiteral("_"),
                callRuntime(
                  "ensureScopeWithId",
                  getScopeIdIdentifier(
                    (currentSection = currentSection.parent!),
                  ),
                ),
              );
            }
          }

          translateVar(
            tag,
            callRuntime(
              "nodeRef",
              getterId && getScopeIdIdentifier(section),
              getterId && t.stringLiteral(getterId),
            ),
          );
        } else {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          let getterFnIdentifier: t.Identifier | undefined;
          if (getterId) {
            getterFnIdentifier = currentProgramPath.scope.generateUidIdentifier(
              `get_${varName}`,
            );
            currentProgramPath.pushContainer(
              "body",
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  getterFnIdentifier,
                  callRuntime(
                    "nodeRef",
                    t.stringLiteral(getterId),
                    getScopeAccessorLiteral(nodeRef!),
                  ),
                ),
              ]),
            );
          }

          for (const reference of references) {
            const referenceSection = getSection(reference);
            if (reference.parentPath?.isCallExpression()) {
              reference.parentPath.replaceWith(
                t.expressionStatement(
                  createScopeReadExpression(referenceSection, nodeRef!),
                ),
              );
            } else if (getterFnIdentifier) {
              reference.replaceWith(
                t.callExpression(getterFnIdentifier, [
                  getScopeExpression(referenceSection, getSection(tag)),
                ]),
              );
            }
          }
        }
      }

      let visitAccessor: t.StringLiteral | t.NumericLiteral | undefined;
      if (nodeRef) {
        visitAccessor = getScopeAccessorLiteral(nodeRef);
        walks.visit(tag, WalkCode.Get);
      }

      write`<${name.node}`;

      if (hasSpread) {
        const attrsObj = attrsToObject(tag)!;
        if (isHTML) {
          addHTMLEffectCall(section, extra.referencedBindings);
          write`${callRuntime("attrs", attrsObj, visitAccessor, getScopeIdIdentifier(section))}`;
        } else {
          addStatement(
            "render",
            section,
            extra.referencedBindings,
            t.expressionStatement(
              callRuntime("attrs", scopeIdentifier, visitAccessor, attrsObj),
            ),
          );
          addStatement(
            "effect",
            section,
            extra.referencedBindings,
            t.expressionStatement(
              callRuntime("attrsEvents", scopeIdentifier, visitAccessor),
            ),
            attrsObj,
          );
        }
      } else {
        // TODO: #129 this should iterate backward and filter out duplicated attrs.
        for (const attr of attrs as t.NodePath<t.MarkoAttribute>[]) {
          const name = attr.node.name;
          const value = attr.get("value");
          const { confident, computed } = attr.node.extra ?? {};
          const valueReferences = value.node.extra?.referencedBindings;

          switch (name) {
            case "class":
            case "style": {
              const helper = `${name}Attr` as const;
              if (confident) {
                write`${getHTMLRuntime()[helper](computed)}`;
              } else if (isHTML) {
                write`${callRuntime(helper, value.node)}`;
              } else {
                addStatement(
                  "render",
                  section,
                  valueReferences,
                  t.expressionStatement(
                    callRuntime(
                      helper,
                      t.memberExpression(scopeIdentifier, visitAccessor!, true),
                      value.node,
                    ),
                  ),
                );
              }
              break;
            }
            default:
              if (confident) {
                write`${getHTMLRuntime().attr(name, computed)}`;
              } else if (isHTML) {
                if (isEventHandler(name)) {
                  addHTMLEffectCall(section, valueReferences);
                } else {
                  write`${callRuntime(
                    "attr",
                    t.stringLiteral(name),
                    value.node,
                  )}`;
                }
              } else if (isEventHandler(name)) {
                addStatement(
                  "effect",
                  section,
                  valueReferences,
                  t.expressionStatement(
                    callRuntime(
                      "on",
                      t.memberExpression(scopeIdentifier, visitAccessor!, true),
                      t.stringLiteral(getEventHandlerName(name)),
                      value.node,
                    ),
                  ),
                  value.node,
                );
              } else {
                addStatement(
                  "render",
                  section,
                  valueReferences,
                  t.expressionStatement(
                    callRuntime(
                      "attr",
                      t.memberExpression(scopeIdentifier, visitAccessor!, true),
                      t.stringLiteral(name),
                      value.node,
                    ),
                  ),
                );
              }

              break;
          }
        }
      }

      if (tagDef && tagDef.parseOptions?.openTagOnly) {
        switch (tagDef.htmlType) {
          case "svg":
          case "math":
            write`/>`;
            break;
          default:
            write`>`;
            break;
        }
      } else {
        write`>`;
      }

      if (isHTML && extra.tagNameNullable) {
        tag
          .insertBefore(t.ifStatement(name.node, writer.consumeHTML(tag)!))[0]
          .skip();
      }

      walks.enter(tag);
    },
    exit(tag) {
      const extra = tag.node.extra!;
      const nodeRef = extra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;

      if (isHTML && extra.tagNameNullable) {
        writer.flushInto(tag);
      }

      tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());

      if (!openTagOnly) {
        writer.writeTo(tag)`</${tag.node.name}>`;
      }

      // dynamic tag stuff
      if (isHTML && extra.tagNameNullable) {
        tag
          .insertBefore(
            t.ifStatement(tag.node.name, writer.consumeHTML(tag)!),
          )[0]
          .skip();
      }

      if (
        nodeRef &&
        (extra[kSerializeMarker] ||
          tag.node.attributes.some((attr) =>
            isStatefulReferences(attr.value.extra?.referencedBindings),
          ))
      ) {
        writer.markNode(tag, nodeRef);
      }

      walks.exit(tag);
      tag.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

function isSpreadAttr(
  attr: t.NodePath<t.MarkoAttribute | t.MarkoSpreadAttribute>,
): attr is t.NodePath<t.MarkoSpreadAttribute> {
  return attr.type === "MarkoSpreadAttribute";
}

function isEventHandler(propName: string) {
  return /^on[A-Z-]/.test(propName);
}

function getEventHandlerName(propName: string) {
  return propName.charAt(2) === "-"
    ? propName.slice(3)
    : propName.charAt(2).toLowerCase() + propName.slice(3);
}
