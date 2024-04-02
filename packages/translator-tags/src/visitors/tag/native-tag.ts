import { assertNoArgs, getTagDef } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";
import attrsToObject from "../../util/attrs-to-object";
import evaluate from "../../util/evaluate";
import { isStatefulReferences } from "../../util/is-stateful";
import { isOutputHTML } from "../../util/marko-config";
import {
  mergeReferences,
  getScopeAccessorLiteral,
  type Binding,
  createBinding,
  BindingType,
} from "../../util/references";
import { callRuntime, getHTMLRuntime } from "../../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import { getOrCreateSection, getSection } from "../../util/sections";
import { addHTMLEffectCall, addStatement } from "../../util/signals";
import translateVar from "../../util/translate-var";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { currentProgramPath, scopeIdentifier } from "../program";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSerializeMarker = Symbol("serialize marker");
const kHasEventHandlers = Symbol("has event handlers");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNativeTagBinding]?: Binding;
    [kHasEventHandlers]?: boolean;
    [kSerializeMarker]?: boolean;
  }
}

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const { node } = tag;
      const attrs = tag.get("attributes");
      let section = tag.has("var") ? getOrCreateSection(tag) : undefined;
      let hasEventHandlers = false;

      /**
       * The reason this seems like it does more work than it needs to
       * is because `evaluate` has side effects so it needs to be run
       * for every attribute that isn't an event handler or a spread
       */
      for (const attr of attrs) {
        if (isSpreadAttr(attr)) {
          section ??= getOrCreateSection(tag);
          mergeReferences(
            tag,
            attrs.map((attr) => attr.node.value),
          );
          hasEventHandlers = true;
          // TODO: should add isEffect to all attributes in a spread?
          break;
        } else if (isEventHandler((attr.node as t.MarkoAttribute).name)) {
          (attr.node.value.extra ??= {}).isEffect = true;
          section ??= getOrCreateSection(tag);
          hasEventHandlers = true;
        } else if (!evaluate(attr).confident) {
          section ??= getOrCreateSection(tag);
        }
      }

      if (section !== undefined) {
        currentProgramPath.node.extra.isInteractive ||= hasEventHandlers;
        const tagName =
          node.name.type === "StringLiteral"
            ? node.name.value
            : t.toIdentifier(tag.get("name"));
        const tagExtra = (node.extra ??= {});
        tagExtra[kHasEventHandlers] = hasEventHandlers;
        tagExtra[kNativeTagBinding] = createBinding(
          "#" + tagName,
          BindingType.dom,
          section,
        );
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
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
        if (isHTML) {
          translateVar(
            tag,
            t.arrowFunctionExpression(
              [],
              t.blockStatement([
                t.throwStatement(
                  t.newExpression(t.identifier("Error"), [
                    t.stringLiteral("Cannot reference DOM node from server"),
                  ]),
                ),
              ]),
            ),
          );
        } else {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          let createElFunction = undefined;
          for (const reference of references) {
            const referenceSection = getSection(reference);
            if (reference.parentPath?.isCallExpression()) {
              reference.parentPath.replaceWith(
                t.expressionStatement(
                  createScopeReadExpression(referenceSection, nodeRef!),
                ),
              );
            } else {
              createElFunction ??= t.identifier(varName + "_getter");
              reference.replaceWith(
                callRuntime(
                  "bindFunction",
                  getScopeExpression(referenceSection, section),
                  createElFunction,
                ),
              );
            }
          }
          if (createElFunction) {
            currentProgramPath.pushContainer(
              "body",
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  createElFunction,
                  t.arrowFunctionExpression(
                    [scopeIdentifier],
                    t.memberExpression(
                      scopeIdentifier,
                      getScopeAccessorLiteral(nodeRef!),
                      true,
                    ),
                  ),
                ),
              ]),
            );
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
        if (isHTML) {
          write`${callRuntime("attrs", attrsToObject(tag)!)}`;
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
                attrsToObject(tag)!,
              ),
            ),
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
    exit(tag: t.NodePath<t.MarkoTag>) {
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
        (extra[kHasEventHandlers] ||
          extra[kSerializeMarker] ||
          tag.has("var") ||
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
};

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
