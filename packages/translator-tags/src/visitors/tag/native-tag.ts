import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getTagDef,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";

import evaluate from "../../util/evaluate";
import { getTagName } from "../../util/get-tag-name";
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
import AssignmentExpressionVisitor from "../assignment-expression";
import FunctionVisitor from "../function";
import { currentProgramPath, scopeIdentifier } from "../program";
import UpdateExpressionVisitor from "../update-expression";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSerializeMarker = Symbol("serialize marker");
const kGetterId = Symbol("node getter id");

const selectAttributeGroups = new WeakMap<
  t.NodePath<t.MarkoTag>,
  ReturnType<typeof getUsedAttrs>
>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNativeTagBinding]?: Binding;
    [kSerializeMarker]?: boolean;
    [kGetterId]?: string;
  }
}

function assertExclusiveControllableGroups(
  tag: t.NodePath<t.MarkoTag>,
  attrs: Record<string, t.MarkoAttribute>,
) {
  const exclusiveGroups = [
    attrs.open || attrs.openChange,
    attrs.checked || attrs.checkedChange,
    attrs.checkedValues || attrs.checkedValuesChange,
    attrs.checkedValue || attrs.checkedValueChange,
    attrs.valueChange,
  ].filter(Boolean);

  if (exclusiveGroups.length > 1) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The attributes ${exclusiveGroups
          .map((attr) => `"${attr.name}"`)
          .join(", ")} are mutually exclusive.`,
      );
  }
}

type RelatedControllable = ReturnType<typeof getRelatedControllable>;
function getRelatedControllable(
  tagName: string,
  attrs: Record<string, t.MarkoAttribute | undefined>,
) {
  switch (tagName) {
    case "input":
      if (attrs.checked || attrs.checkedChange) {
        return {
          special: false,
          helper: "controllable_input_checked",
          attrs: [attrs.checked, attrs.checkedChange],
        } as const;
      }

      if (attrs.checkedValue || attrs.checkedValueChange) {
        return {
          special: true,
          helper: "controllable_input_checkedValue",
          attrs: [attrs.checkedValue, attrs.checkedValueChange, attrs.value],
        } as const;
      }

      if (attrs.checkedValues || attrs.checkedValuesChange) {
        return {
          special: true,
          helper: "controllable_input_checkedValues",
          attrs: [attrs.checkedValues, attrs.checkedValuesChange, attrs.value],
        } as const;
      }

      if (attrs.value || attrs.valueChange) {
        return {
          special: false,
          helper: "controllable_input_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "select":
      if (attrs.value || attrs.valueChange) {
        return {
          special: true,
          helper: "controllable_select_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "details":
      if (attrs.open || attrs.openChange) {
        return {
          special: false,
          helper: "controllable_details_open",
          attrs: [attrs.open, attrs.openChange],
        } as const;
      }
      break;
    case "dialog":
      if (attrs.open || attrs.openChange) {
        return {
          special: false,
          helper: "controllable_dialog_open",
          attrs: [attrs.open, attrs.openChange],
        } as const;
      }
      break;
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

      const tagName = getTagName(tag)!;
      const section = getOrCreateSection(tag);
      let hasEventHandlers = false;
      let hasDynamicAttributes = false;

      const seen: Record<string, t.MarkoAttribute> = {};
      const { attributes } = tag.node;
      let relatedControllable: RelatedControllable;
      let spreadReferenceNodes: t.Node[] | undefined;
      for (let i = attributes.length; i--; ) {
        const attr = attributes[i];
        if (t.isMarkoAttribute(attr)) {
          if (seen[attr.name]) {
            // drop references for duplicated attributes.
            dropReferences(attr.value);
            continue;
          }

          seen[attr.name] = attr;

          if (isEventHandler(attr.name) || isChangeHandler(attr.name)) {
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
          relatedControllable = getRelatedControllable(tagName, seen);
        }
      }

      assertExclusiveControllableGroups(tag, seen);

      if (spreadReferenceNodes) {
        if (relatedControllable && !relatedControllable.attrs.every(Boolean)) {
          for (const attr of relatedControllable.attrs) {
            if (attr) {
              spreadReferenceNodes.push(attr.value);
            }
          }
          relatedControllable = undefined;
        }
        mergeReferences(section, tag.node, spreadReferenceNodes);
      } else {
        relatedControllable = getRelatedControllable(tagName, seen);
      }

      if (relatedControllable) {
        mergeReferences(
          section,
          relatedControllable.attrs.find(Boolean)!,
          relatedControllable.attrs.map((it) => it?.value),
        );
      }

      if (node.var || hasEventHandlers || hasDynamicAttributes) {
        currentProgramPath.node.extra.isInteractive ||= hasEventHandlers;
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
      const tagName = getTagName(tag)!;
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

      const {
        staticAttrs,
        staticControllable,
        spreadExpression,
        skipExpression,
      } = getUsedAttrs(tagName, tag.node);

      if (staticControllable) {
        const { helper, attrs } = staticControllable;
        const changeAttr = attrs[1];
        const firstAttr = attrs.find(Boolean)!;
        const referencedBindings = firstAttr.value.extra?.referencedBindings;

        if (changeAttr) {
          tag
            .get("attributes")
            .find((it) => it.node === changeAttr)!
            .traverse(HoistVisitors);
        }

        const values = attrs.map((attr) => attr?.value);

        if (isHTML) {
          write`${callRuntime(helper, getScopeIdIdentifier(section), visitAccessor!, ...values)}`;
          addHTMLEffectCall(section, undefined);
        } else {
          addStatement(
            "render",
            section,
            referencedBindings,
            t.expressionStatement(
              callRuntime(helper, scopeIdentifier, visitAccessor!, ...values),
            ),
          );
          addStatement(
            "effect",
            section,
            undefined,
            t.expressionStatement(
              callRuntime(`${helper}_effect`, scopeIdentifier, visitAccessor!),
            ),
          );
        }
      }

      for (const attr of staticAttrs) {
        const { name, value } = attr;
        const { confident, computed } = attr.extra ?? {};
        const valueReferences = value.extra?.referencedBindings;

        if (isHTML && tagName === "option" && name === "value") {
          write`${callRuntime("optionValueAttr", value)}`;
          continue;
        }

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
            write`${callRuntime("partialAttrs", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(section), name.node)}`;
          } else {
            write`${callRuntime("attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(section), name.node)}`;
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

      if (
        isHTML &&
        tagName === "select" &&
        (staticControllable || spreadExpression)
      ) {
        writer.flushBefore(tag);
        selectAttributeGroups.set(tag, {
          staticControllable,
          spreadExpression,
          skipExpression,
          staticAttrs,
        });
      }

      walks.enter(tag);
    },
    exit(tag) {
      const tagName = getTagName(tag)!;
      const extra = tag.node.extra!;
      const nodeRef = extra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
      const { staticControllable, spreadExpression } =
        selectAttributeGroups.get(tag) || {};

      if (isHTML && extra.tagNameNullable) {
        writer.flushInto(tag);
      }

      if (
        isHTML &&
        tagName === "select" &&
        (staticControllable || spreadExpression)
      ) {
        writer.flushInto(tag);
        tag.insertBefore(
          t.expressionStatement(
            callRuntime(
              "withSelectedValue",
              // TODO: we should not duplicate these expressions - we should hoist them.
              staticControllable?.attrs[0]?.value ||
                t.memberExpression(
                  spreadExpression!,
                  t.stringLiteral("value"),
                  true,
                ),
              t.arrowFunctionExpression(
                [],
                t.blockStatement(tag.node.body.body),
              ),
            ),
          ),
        );
      } else {
        tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());
      }

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

function getUsedAttrs(tagName: string, tag: t.MarkoTag) {
  const seen: Record<string, t.MarkoAttribute> = {};
  const { attributes } = tag;
  const maybeStaticAttrs = new Set<t.MarkoAttribute>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let skipProps: undefined | t.ObjectExpression["properties"];
  let staticControllable: RelatedControllable;
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      if (!spreadProps) {
        spreadProps = [];
        staticControllable = getRelatedControllable(tagName, seen);
        if (staticControllable && !staticControllable.attrs.every(Boolean)) {
          for (const attr of staticControllable.attrs) {
            if (attr) {
              spreadProps.push(attrToObjectProperty(attr));
              maybeStaticAttrs.delete(attr);
            }
          }

          staticControllable = undefined;
        }
      }
      spreadProps.push(t.spreadElement(value));
    } else if (!seen[attr.name]) {
      seen[attr.name] = attr;
      if (spreadProps) {
        spreadProps.push(attrToObjectProperty(attr));
      } else {
        maybeStaticAttrs.add(attr);
      }
    }
  }

  if (!spreadProps) {
    staticControllable = getRelatedControllable(tagName, seen);

    if (staticControllable?.special === false && !staticControllable.attrs[1]) {
      // If there's no change handler and this controllable is not a special attribute then we can just write it
      // as a normal attribute.
      staticControllable = undefined;
    }
  }

  if (staticControllable) {
    for (const attr of staticControllable.attrs) {
      if (attr) {
        maybeStaticAttrs.delete(attr);
      }
    }
  }

  const staticAttrs = [...maybeStaticAttrs].reverse();

  if (spreadProps) {
    spreadProps.reverse();

    if (staticControllable) {
      for (const attr of staticControllable.attrs) {
        if (attr) {
          (skipProps ||= []).push(
            t.objectProperty(toPropertyName(attr.name), t.numericLiteral(1)),
          );
        }
      }
    }

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
    staticControllable,
    spreadExpression,
    skipExpression,
  };
}

function isEventHandler(propName: string) {
  return /^on[A-Z-]/.test(propName);
}

function isChangeHandler(propName: string) {
  return /^(?:value|checked(?:Values?)?|open)Change/.test(propName);
}

function getEventHandlerName(propName: string) {
  return propName.charAt(2) === "-"
    ? propName.slice(3)
    : propName.charAt(2).toLowerCase() + propName.slice(3);
}

function attrToObjectProperty(attr: t.MarkoAttribute) {
  return t.objectProperty(toPropertyName(attr.name), attr.value);
}

const HoistVisitors = {
  Function: FunctionVisitor.translate,
  UpdateExpression: UpdateExpressionVisitor.translate,
  AssignmentExpression: AssignmentExpressionVisitor.translate,
};
