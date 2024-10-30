import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getTagDef,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";

import evaluate from "../../util/evaluate";
import { isStatefulReferences } from "../../util/is-stateful";
import { isOutputHTML } from "../../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
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
import toPropertyName from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
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
      assertNoArgs(tag);
      assertNoParams(tag);
      assertNoAttributeTags(tag);

      const { node } = tag;
      if (node.var && !t.isIdentifier(node.var)) {
        throw tag
          .get("var")
          .buildCodeFrameError(
            "Tag variables on native elements cannot be destructured.",
          );
      }

      let hasEventHandlers = false;
      let hasDynamicAttributes = false;

      const seen = new Set<string>();
      const { attributes } = tag.node;
      let spreadReferenceNodes: t.Node[] | undefined;
      for (let i = attributes.length; i--; ) {
        const attr = attributes[i];
        if (t.isMarkoAttribute(attr)) {
          if (seen.has(attr.name)) {
            // drop references for duplicated attributes.
            dropReferences(attr.value);
            continue;
          }

          seen.add(attr.name);

          if (isEventHandler(attr.name)) {
            (attr.value.extra ??= {}).isEffect = true;
            hasEventHandlers = true;
          } else if (!evaluate(tag.get("attributes")[i]).confident) {
            hasDynamicAttributes = true;
          }
        } else if (t.isMarkoSpreadAttribute(attr)) {
          hasEventHandlers = true;
          hasDynamicAttributes = true;
          (attr.value.extra ??= {}).isEffect = true;
        }

        if (spreadReferenceNodes) {
          spreadReferenceNodes.push(attr.value);
        } else if (t.isMarkoSpreadAttribute(attr)) {
          spreadReferenceNodes = [attr.value];
        }
      }

      if (spreadReferenceNodes) {
        mergeReferences(tag, spreadReferenceNodes);
      }

      if (node.var || hasEventHandlers || hasDynamicAttributes) {
        currentProgramPath.node.extra.isInteractive ||= hasEventHandlers;
        const section = getOrCreateSection(tag);
        const tagName =
          node.name.type === "StringLiteral"
            ? node.name.value
            : t.toIdentifier(tag.get("name"));
        const tagExtra = (node.extra ??= {});
        const bindingName = "#" + tagName;
        tagExtra[kSerializeMarker] = hasEventHandlers || !!node.var;
        tagExtra[kNativeTagBinding] = createBinding(
          bindingName,
          BindingType.dom,
          section,
        );

        if (node.var) {
          for (const ref of tag.scope.getBinding(node.var.name)!
            .referencePaths) {
            if (!ref.parentPath?.isCallExpression()) {
              tagExtra[kGetterId] = getRegisterUID(section, bindingName);
              break;
            }
          }
        }
      }
    },
  },
  translate: {
    enter(tag) {
      const extra = tag.node.extra!;
      const nodeRef = extra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const name = tag.get("name");
      const tagDef = getTagDef(tag);
      const write = writer.writeTo(tag);
      const section = getSection(tag);

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

      const { staticAttrs, spreadExpression, skipExpression } = getUsedAttrs(
        tag.node,
      );

      for (const attr of staticAttrs) {
        const { name, value } = attr;
        const { confident, computed } = attr.extra ?? {};
        const valueReferences = value.extra?.referencedBindings;

        switch (name) {
          case "class":
          case "style": {
            const helper = `${name}Attr` as const;
            if (confident) {
              write`${getHTMLRuntime()[helper](computed)}`;
            } else if (isHTML) {
              write`${callRuntime(helper, value)}`;
            } else {
              addStatement(
                "render",
                section,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    helper,
                    t.memberExpression(scopeIdentifier, visitAccessor!, true),
                    value,
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
                write`${callRuntime("attr", t.stringLiteral(name), value)}`;
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
                    value,
                  ),
                ),
                value,
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
                    value,
                  ),
                ),
              );
            }

            break;
        }
      }

      if (spreadExpression) {
        if (isHTML) {
          addHTMLEffectCall(section, extra.referencedBindings);

          if (skipExpression) {
            write`${callRuntime("partialAttrs", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(section))}`;
          } else {
            write`${callRuntime("attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(section))}`;
          }
        } else {
          if (skipExpression) {
            addStatement(
              "render",
              section,
              extra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "partialAttrs",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                  skipExpression,
                ),
              ),
            );
          } else {
            addStatement(
              "render",
              section,
              extra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "attrs",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                ),
              ),
            );
          }

          addStatement(
            "effect",
            section,
            extra.referencedBindings,
            t.expressionStatement(
              callRuntime("attrsEvents", scopeIdentifier, visitAccessor),
            ),
            spreadExpression,
          );
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

function getUsedAttrs(tag: t.MarkoTag) {
  const seen = new Set<string>();
  const { attributes } = tag;
  const staticAttrs: t.MarkoAttribute[] = [];
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let skipProps: undefined | t.ObjectExpression["properties"];
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      (spreadProps ||= []).push(t.spreadElement(value));
    } else if (!seen.has(attr.name)) {
      seen.add(attr.name);
      if (spreadProps) {
        spreadProps.push(t.objectProperty(toPropertyName(attr.name), value));
      } else {
        staticAttrs.push(attr);
      }
    }
  }

  staticAttrs.reverse();

  if (spreadProps) {
    spreadProps.reverse();

    for (const { name } of staticAttrs) {
      (skipProps ||= []).push(
        t.objectProperty(toPropertyName(name), t.numericLiteral(1)),
      );
    }

    if (skipProps) {
      skipExpression = t.objectExpression(skipProps);
    }

    spreadExpression = propsToExpression(spreadProps);
  }

  return {
    staticAttrs,
    spreadExpression,
    skipExpression,
  };
}

function isEventHandler(propName: string) {
  return /^on[A-Z-]/.test(propName);
}

function getEventHandlerName(propName: string) {
  return propName.charAt(2) === "-"
    ? propName.slice(3)
    : propName.charAt(2).toLowerCase() + propName.slice(3);
}
