import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getProgram,
  getTagDef,
} from "@marko/compiler/babel-utils";

import { getEventHandlerName, isEventHandler } from "../../../common/helpers";
import { WalkCode } from "../../../common/types";
import evaluate from "../../util/evaluate";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getAccessorPrefix } from "../../util/get-accessor-char";
import { getTagName } from "../../util/get-tag-name";
import isInvokedFunction from "../../util/is-invoked-function";
import { isOutputHTML } from "../../util/marko-config";
import normalizeStringExpression from "../../util/normalize-string-expression";
import { type Opt, push } from "../../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
  getScopeAccessorLiteral,
  mergeReferences,
  setReferencesScope,
  trackHoistedReference,
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
  isSameOrChildSection,
} from "../../util/sections";
import {
  addBindingSerializeReasonExpr,
  forceBindingSerialize,
  getBindingSerializeReason,
} from "../../util/serialize-reasons";
import {
  addHTMLEffectCall,
  addStatement,
  getRegisterUID,
  serializeOwners,
  serializeSectionIfNeeded,
} from "../../util/signals";
import { toObjectProperty } from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
import translateVar from "../../util/translate-var";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSkipMark = Symbol("skip native tag mark");
const kGetterId = Symbol("node getter id");

const htmlSelectArgs = new WeakMap<
  t.MarkoTag,
  {
    value: t.Expression;
    valueChange: t.Expression;
  }
>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNativeTagBinding]?: Binding;
    [kSkipMark]?: true;
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
    case "textarea":
      if (attrs.value || attrs.valueChange) {
        return {
          special: true,
          helper: "controllable_textarea_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "details":
    case "dialog":
      if (attrs.open || attrs.openChange) {
        return {
          special: false,
          helper: "controllable_detailsOrDialog_open",
          attrs: [attrs.open, attrs.openChange],
        } as const;
      }
      break;
  }
}

export default {
  transform: {
    enter(tag) {
      const tagName = getTagName(tag);
      if (tagName === "textarea" && tag.node.body.body.length) {
        // convert textarea body into a static value attribute.
        const parts: (string | t.Expression)[] = [];
        for (const child of tag.node.body.body) {
          if (
            child.type === "MarkoText" ||
            (child.type === "MarkoPlaceholder" && child.escape)
          ) {
            parts.push(child.value);
          } else {
            throw tag.hub.file.hub.buildError(
              child,
              "Unexpected content in textarea, only text and placeholders are supported.",
              SyntaxError,
            );
          }
        }
        tag.node.attributes.push(
          t.markoAttribute(
            "value",
            normalizeStringExpression(parts) || buildUndefined(),
          ),
        );

        tag.node.body.body = [];
      }
    },
  },
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
      const seen: Record<string, t.MarkoAttribute> = {};
      const { attributes } = tag.node;
      let hasDynamicAttributes = false;
      let hasEventHandlers = false;
      let relatedControllable: RelatedControllable;
      let spreadReferenceNodes: t.Node[] | undefined;
      let attrExprExtras: Opt<t.NodeExtra>;

      for (let i = attributes.length; i--; ) {
        const attr = attributes[i];
        const valueExtra = (attr.value.extra ??= {});

        if (t.isMarkoAttribute(attr)) {
          if (seen[attr.name]) {
            // drop references for duplicated attributes.
            dropReferences(attr.value);
            continue;
          }

          seen[attr.name] = attr;

          if (isEventHandler(attr.name) || isChangeHandler(attr.name)) {
            valueExtra.isEffect = true;
            hasEventHandlers = true;
          } else if (!evaluate(attr.value).confident) {
            hasDynamicAttributes = true;
          }
        } else if (t.isMarkoSpreadAttribute(attr)) {
          valueExtra.isEffect = true;
          hasEventHandlers = true;
          hasDynamicAttributes = true;
        }

        if (spreadReferenceNodes) {
          spreadReferenceNodes.push(attr.value);
        } else if (t.isMarkoSpreadAttribute(attr)) {
          spreadReferenceNodes = [attr.value];
          relatedControllable = getRelatedControllable(tagName, seen);
        } else {
          attrExprExtras = push(attrExprExtras, valueExtra);
        }
      }

      assertExclusiveControllableGroups(tag, seen);

      if (node.var || hasEventHandlers || hasDynamicAttributes) {
        const tagExtra = (node.extra ??= {});
        const tagSection = getOrCreateSection(tag);
        const nodeBinding = (tagExtra[kNativeTagBinding] = createBinding(
          "#" +
            (node.name.type === "StringLiteral"
              ? node.name.value
              : t.toIdentifier(tag.get("name"))),
          BindingType.dom,
          tagSection,
        ));
        getProgram().node.extra.isInteractive ||= hasEventHandlers;

        if (spreadReferenceNodes) {
          if (
            relatedControllable &&
            !relatedControllable.attrs.every(Boolean)
          ) {
            for (const attr of relatedControllable.attrs) {
              if (attr) {
                spreadReferenceNodes.push(attr.value);
              }
            }
            relatedControllable = undefined;
          }
          mergeReferences(tagSection, tag.node, spreadReferenceNodes);
        } else {
          relatedControllable = getRelatedControllable(tagName, seen);
        }

        if (relatedControllable) {
          mergeReferences(
            tagSection,
            relatedControllable.attrs.find(Boolean)!.value,
            relatedControllable.attrs.map((it) => it?.value),
          );
        }

        if (node.var) {
          forceBindingSerialize(tagSection, nodeBinding);
          const varBinding = tag.scope.getBinding(node.var.name)!;
          for (const referencePath of varBinding.referencePaths) {
            const referenceSection = getSection(referencePath);

            setReferencesScope(referencePath);

            if (!isSameOrChildSection(tagSection, referenceSection)) {
              trackHoistedReference(
                referencePath as t.NodePath<t.Identifier>,
                nodeBinding,
              );
            } else if (!isInvokedFunction(referencePath)) {
              tagExtra[kGetterId] ||= getRegisterUID(
                tagSection,
                nodeBinding.name,
              );
            }
          }
        } else if (hasEventHandlers || spreadReferenceNodes) {
          forceBindingSerialize(tagSection, nodeBinding);
        } else {
          addBindingSerializeReasonExpr(
            tagSection,
            nodeBinding,
            push(attrExprExtras, tagExtra),
          );
        }
      }
    },
  },
  translate: {
    enter(tag) {
      const tagName = getTagName(tag)!;
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const name = tag.get("name");
      const tagDef = getTagDef(tag);
      const write = writer.writeTo(tag);
      const tagSection = getSection(tag);

      if (isHTML && tagExtra.tagNameNullable) {
        writer.flushBefore(tag);
      }

      if (tag.has("var")) {
        const varName = (tag.node.var as t.Identifier).name;
        const varBinding = tag.scope.getBinding(varName)!;
        const getterId = tagExtra[kGetterId];
        if (isHTML) {
          for (const reference of varBinding.referencePaths) {
            const referenceSection = getSection(reference);
            if (!reference.node.extra?.hoist) {
              serializeOwners(referenceSection, tagSection);
            }
          }

          serializeSectionIfNeeded(tagSection, true);
          translateVar(
            tag,
            callRuntime(
              "nodeRef",
              getterId && getScopeIdIdentifier(tagSection),
              getterId && t.stringLiteral(getterId),
            ),
          );
        } else {
          let getterFnIdentifier: t.Identifier | undefined;
          if (getterId) {
            getterFnIdentifier = generateUidIdentifier(`get_${varName}`);
            getProgram().node.body.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  getterFnIdentifier,
                  callRuntime(
                    "nodeRef",
                    t.stringLiteral(getterId),
                    t.stringLiteral(
                      getAccessorPrefix().Getter +
                        getScopeAccessorLiteral(nodeBinding!).value,
                    ),
                  ),
                ),
              ]),
            );
          }

          for (const reference of varBinding.referencePaths) {
            if (!reference.node.extra?.hoistedBinding) {
              const referenceSection = getSection(reference);
              if (isInvokedFunction(reference)) {
                reference.parentPath.replaceWith(
                  t.expressionStatement(
                    createScopeReadExpression(referenceSection, nodeBinding!),
                  ),
                );
              } else if (getterFnIdentifier) {
                reference.replaceWith(
                  t.callExpression(getterFnIdentifier, [
                    getScopeExpression(referenceSection, getSection(tag)),
                  ]),
                );
              } else {
                reference.replaceWith(
                  t.expressionStatement(
                    t.memberExpression(
                      getScopeExpression(tagSection, referenceSection),
                      t.stringLiteral(
                        getAccessorPrefix().Getter +
                          getScopeAccessorLiteral(nodeBinding!).value,
                      ),
                      true,
                    ),
                  ),
                );
              }
            }
          }
        }
      }

      const visitAccessor = nodeBinding && getScopeAccessorLiteral(nodeBinding);
      if (visitAccessor) {
        walks.visit(tag, WalkCode.Get);
      }

      write`<${name.node}`;

      const usedAttrs = getUsedAttrs(tagName, tag.node);
      const { staticAttrs, staticControllable, skipExpression } = usedAttrs;
      let { spreadExpression } = usedAttrs;

      if (staticControllable) {
        const { helper, attrs } = staticControllable;
        const firstAttr = attrs.find(Boolean)!;
        const referencedBindings = firstAttr.value.extra?.referencedBindings;
        const values = attrs.map((attr) => attr?.value);

        if (isHTML) {
          if (tagName !== "select" && tagName !== "textarea") {
            write`${callRuntime(helper, getScopeIdIdentifier(tagSection), visitAccessor, ...values)}`;
          }
          addHTMLEffectCall(tagSection, undefined);
        } else {
          addStatement(
            "render",
            tagSection,
            referencedBindings,
            t.expressionStatement(
              callRuntime(helper, scopeIdentifier, visitAccessor, ...values),
            ),
          );
          addStatement(
            "effect",
            tagSection,
            undefined,
            t.expressionStatement(
              callRuntime(`${helper}_effect`, scopeIdentifier, visitAccessor),
            ),
          );
        }
      }

      let writeAtStartOfBody: t.Expression | undefined;

      if (isHTML) {
        if (tagName === "select") {
          if (staticControllable) {
            htmlSelectArgs.set(tag.node, {
              value: staticControllable.attrs[0]?.value || buildUndefined(),
              valueChange:
                staticControllable.attrs[1]?.value || buildUndefined(),
            });
          } else if (spreadExpression) {
            const spreadIdentifier = generateUidIdentifier("select_input");
            tag.insertBefore(
              t.variableDeclaration("const", [
                t.variableDeclarator(spreadIdentifier, spreadExpression),
              ]),
            );
            htmlSelectArgs.set(tag.node, {
              value: t.memberExpression(
                spreadIdentifier,
                t.identifier("value"),
              ),
              valueChange: t.memberExpression(
                spreadIdentifier,
                t.identifier("valueChange"),
              ),
            });
            spreadExpression = spreadIdentifier;
          }
        } else if (tagName === "textarea") {
          let value: undefined | t.Expression;
          let valueChange: undefined | t.Expression;
          if (staticControllable) {
            value = staticControllable.attrs[0]?.value;
            valueChange = staticControllable.attrs[1]?.value;
          } else if (spreadExpression) {
            const spreadIdentifier = generateUidIdentifier("textarea_input");
            tag.insertBefore(
              t.variableDeclaration("const", [
                t.variableDeclarator(spreadIdentifier, spreadExpression),
              ]),
            );
            value = t.memberExpression(spreadIdentifier, t.identifier("value"));
            valueChange = t.memberExpression(
              spreadIdentifier,
              t.identifier("valueChange"),
            );
            spreadExpression = spreadIdentifier;
          }

          if (value || valueChange) {
            writeAtStartOfBody = callRuntime(
              "controllable_textarea_value",
              getScopeIdIdentifier(getSection(tag)),
              getScopeAccessorLiteral(nodeBinding!),
              value,
              valueChange,
            );
          }
        }
      }

      for (const attr of staticAttrs) {
        const { name, value } = attr;
        const { confident, computed } = value.extra || {};
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
                tagSection,
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
                addHTMLEffectCall(tagSection, valueReferences);
              } else {
                write`${callRuntime("attr", t.stringLiteral(name), value)}`;
              }
            } else if (isEventHandler(name)) {
              addStatement(
                "effect",
                tagSection,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    "on",
                    t.memberExpression(scopeIdentifier, visitAccessor!, true),
                    t.stringLiteral(getEventHandlerName(name)),
                    value,
                  ),
                ),
              );
            } else {
              addStatement(
                "render",
                tagSection,
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
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (skipExpression) {
            write`${callRuntime("partialAttrs", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(tagSection), name.node)}`;
          } else {
            write`${callRuntime("attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(tagSection), name.node)}`;
          }
        } else {
          if (skipExpression) {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
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
              tagSection,
              tagExtra.referencedBindings,
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
            tagSection,
            tagExtra.referencedBindings,
            t.expressionStatement(
              callRuntime("attrsEvents", scopeIdentifier, visitAccessor),
            ),
            false,
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

      // TODO: this is broken for DOM (and select in ssr) and so is currently disabled and always becomes a dynamic tag.
      if (isHTML && tagExtra.tagNameNullable) {
        tag
          .insertBefore(t.ifStatement(name.node, writer.consumeHTML(tag)!))[0]
          .skip();
      }

      if (writeAtStartOfBody) {
        write`${writeAtStartOfBody}`;
      }

      walks.enter(tag);
    },
    exit(tag) {
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNativeTagBinding];
      const isHTML = isOutputHTML();
      const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
      const selectArgs = isHTML && htmlSelectArgs.get(tag.node);
      const tagName = getTagName(tag);
      const tagSection = getSection(tag);

      if (isHTML && tagExtra.tagNameNullable) {
        writer.flushInto(tag);
      }

      if (selectArgs) {
        writer.writeTo(tag)`</${tag.node.name}>`;
        writer.flushInto(tag);
        tag.insertBefore(
          t.expressionStatement(
            callRuntime(
              "controllable_select_value",
              getScopeIdIdentifier(getSection(tag)),
              getScopeAccessorLiteral(nodeBinding!),
              selectArgs.value,
              selectArgs.valueChange,
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

      const serializeMarkerReason =
        nodeBinding &&
        !tagExtra[kSkipMark] &&
        getBindingSerializeReason(tagSection, nodeBinding);
      const shouldMark = !!serializeMarkerReason;

      if (!openTagOnly && !selectArgs) {
        writer.writeTo(
          tag,
          isHTML && !shouldMark && (tagName === "html" || tagName === "body"),
        )`</${tag.node.name}>`;
      }

      // dynamic tag stuff
      if (isHTML && tagExtra.tagNameNullable) {
        tag
          .insertBefore(
            t.ifStatement(tag.node.name, writer.consumeHTML(tag)!),
          )[0]
          .skip();
      }

      if (shouldMark) {
        writer.markNode(tag, nodeBinding);
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
              spreadProps.push(toObjectProperty(attr.name, attr.value));
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
        spreadProps.push(toObjectProperty(attr.name, attr.value));
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
            toObjectProperty(attr.name, t.numericLiteral(1)),
          );
        }
      }
    }

    for (const { name } of staticAttrs) {
      (skipProps ||= []).push(toObjectProperty(name, t.numericLiteral(1)));
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

function isChangeHandler(propName: string) {
  return /^(?:value|checked(?:Value)?|open)Change/.test(propName);
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}
