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
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { getTagName } from "../../util/get-tag-name";
import isInvokedFunction from "../../util/is-invoked-function";
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
  forceOwnersSerialize,
  getBindingSerializeReason,
} from "../../util/serialize-reasons";
import {
  addHTMLEffectCall,
  addStatement,
  getRegisterUID,
} from "../../util/signals";
import { toObjectProperty, toPropertyName } from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
import translateVar from "../../util/translate-var";
import { type TemplateVisitor, translateByTarget } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";
import { getSerializeGuard } from "../program/html";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSkipEndTag = Symbol("skip native tag mark");
const kGetterId = Symbol("node getter id");
const kTagContentAttr = Symbol("tag could have dynamic content attribute");

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
    [kSkipEndTag]?: true;
    [kGetterId]?: string;
    [kTagContentAttr]?: true;
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
            "Tag variables on [native tags](https://markojs.com/docs/reference/native-tag) cannot be destructured.",
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

        if (hasEventHandlers || spreadReferenceNodes) {
          forceBindingSerialize(tagSection, nodeBinding);
        }

        if (node.var) {
          forceBindingSerialize(tagSection, nodeBinding);
          for (const ref of tag.scope.getBinding(node.var.name)!
            .referencePaths) {
            const refSection = getOrCreateSection(ref);
            setReferencesScope(ref);

            if (isSameOrChildSection(tagSection, refSection)) {
              forceOwnersSerialize(
                refSection,
                tagSection,
                getAccessorProp().Owner,
              );
              if (!tagExtra[kGetterId] && !isInvokedFunction(ref)) {
                tagExtra[kGetterId] = getRegisterUID(
                  tagSection,
                  nodeBinding.name,
                );
              }
            } else {
              trackHoistedReference(
                ref as t.NodePath<t.Identifier>,
                nodeBinding,
              );
            }
          }
        }

        addBindingSerializeReasonExpr(
          tagSection,
          nodeBinding,
          push(attrExprExtras, tagExtra),
        );
      }
    },
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagName = getTagName(tag)!;
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);

        if (tagExtra.tagNameNullable) {
          writer.flushBefore(tag);
        }

        if (tag.node.var) {
          const getterId = tagExtra[kGetterId];
          translateVar(
            tag,
            callRuntime(
              "_el",
              getterId && getScopeIdIdentifier(tagSection),
              getterId && t.stringLiteral(getterId),
            ),
          );
        }

        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

        write`<${tag.node.name}`;

        const usedAttrs = getUsedAttrs(tagName, tag.node);
        const { staticAttrs, staticControllable, skipExpression } = usedAttrs;
        let { spreadExpression } = usedAttrs;

        if (staticControllable) {
          const { helper, attrs } = staticControllable;

          if (tagName !== "select" && tagName !== "textarea") {
            const values = attrs.map((attr) => attr?.value);
            write`${callRuntime(helper, getScopeIdIdentifier(tagSection), visitAccessor, ...values)}`;
          }
          addHTMLEffectCall(tagSection, undefined);
        }

        let writeAtStartOfBody: t.Expression | undefined;

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
              "_attr_textarea_value",
              getScopeIdIdentifier(getSection(tag)),
              getScopeAccessorLiteral(nodeBinding!),
              value,
              valueChange,
            );
          }
        }

        for (const attr of staticAttrs) {
          const { name, value } = attr;
          const { confident, computed } = value.extra || {};
          const valueReferences = value.extra?.referencedBindings;

          if (tagName === "option" && name === "value") {
            write`${callRuntime("_attr_option_value", value)}`;
            continue;
          }

          switch (name) {
            case "class":
            case "style": {
              const helper = `_attr_${name}` as const;
              if (confident) {
                write`${getHTMLRuntime()[helper](computed)}`;
              } else {
                write`${callRuntime(helper, value)}`;
              }
              break;
            }
            default:
              if (confident) {
                write`${getHTMLRuntime()._attr(name, computed)}`;
              } else if (isEventHandler(name)) {
                addHTMLEffectCall(tagSection, valueReferences);
              } else {
                write`${callRuntime("_attr", t.stringLiteral(name), value)}`;
              }

              break;
          }
        }

        const isOpenOnly = !!(tagDef && tagDef.parseOptions?.openTagOnly);
        const hasChildren = !!tag.node.body.body.length;

        if (spreadExpression) {
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (isOpenOnly || hasChildren || usedAttrs.staticContentAttr) {
            if (skipExpression) {
              write`${callRuntime("_attrs_partial", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(tagSection), tag.node.name)}`;
            } else {
              write`${callRuntime("_attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(tagSection), tag.node.name)}`;
            }
          }
        }

        if (isOpenOnly) {
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
          if (usedAttrs.staticContentAttr) {
            write`>`;
            tagExtra[kTagContentAttr] = true;
            (tag.node.body.body as t.Statement[]) = [
              t.expressionStatement(
                callRuntime(
                  "_attr_content",
                  visitAccessor,
                  getScopeIdIdentifier(tagSection),
                  usedAttrs.staticContentAttr.value,
                  getSerializeGuard(
                    nodeBinding &&
                      getBindingSerializeReason(tagSection, nodeBinding),
                    true,
                  ),
                ),
              ),
            ];
          } else if (spreadExpression && !hasChildren) {
            const serializeReason = getSerializeGuard(
              nodeBinding && getBindingSerializeReason(tagSection, nodeBinding),
              true,
            );
            tagExtra[kTagContentAttr] = true;
            (tag.node.body.body as t.Statement[]) = [
              skipExpression
                ? t.expressionStatement(
                    callRuntime(
                      "_attrs_partial_content",
                      spreadExpression,
                      skipExpression,
                      visitAccessor,
                      getScopeIdIdentifier(tagSection),
                      tag.node.name,
                      serializeReason,
                    ),
                  )
                : t.expressionStatement(
                    callRuntime(
                      "_attrs_content",
                      spreadExpression,
                      visitAccessor,
                      getScopeIdIdentifier(tagSection),
                      tag.node.name,
                      serializeReason,
                    ),
                  ),
            ];
          } else {
            write`>`;
          }
        }

        // TODO: this is broken for DOM (and select in ssr) and so is currently disabled and always becomes a dynamic tag.
        if (tagExtra.tagNameNullable) {
          tag
            .insertBefore(
              t.ifStatement(tag.node.name, writer.consumeHTML(tag)!),
            )[0]
            .skip();
        }

        if (writeAtStartOfBody) {
          write`${writeAtStartOfBody}`;
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const selectArgs = htmlSelectArgs.get(tag.node);
        const tagName = getTagName(tag);
        const tagSection = getSection(tag);

        if (tagExtra[kTagContentAttr]) {
          writer.flushBefore(tag);
        }

        if (tagExtra.tagNameNullable) {
          writer.flushInto(tag);
        }

        if (selectArgs) {
          if (!tagExtra[kSkipEndTag]) {
            writer.writeTo(tag)`</${tag.node.name}>`;
          }

          writer.flushInto(tag);
          tag.insertBefore(
            t.expressionStatement(
              callRuntime(
                "_attr_select_value",
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

        const markerSerializeReason =
          !tagExtra[kSkipEndTag] &&
          nodeBinding &&
          getBindingSerializeReason(tagSection, nodeBinding);

        if (!tagExtra[kSkipEndTag] && !openTagOnly && !selectArgs) {
          writer.writeTo(
            tag,
            !markerSerializeReason &&
              (tagName === "html" || tagName === "body"),
          )`</${tag.node.name}>`;
        }

        // dynamic tag stuff
        if (tagExtra.tagNameNullable) {
          tag
            .insertBefore(
              t.ifStatement(tag.node.name, writer.consumeHTML(tag)!),
            )[0]
            .skip();
        }

        if (markerSerializeReason) {
          writer.markNode(tag, nodeBinding, markerSerializeReason);
        }

        tag.remove();
      },
    },
    dom: {
      enter(tag) {
        const tagName = getTagName(tag)!;
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);

        if (tag.node.var) {
          const varName = (tag.node.var as t.Identifier).name;
          const varBinding = tag.scope.getBinding(varName)!;
          const getterId = tagExtra[kGetterId];
          let getterFnIdentifier: t.Identifier | undefined;
          if (getterId) {
            getterFnIdentifier = generateUidIdentifier(`get_${varName}`);
            getProgram().node.body.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  getterFnIdentifier,
                  callRuntime(
                    "_el",
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
            const referenceSection = getSection(reference);
            if (isSameOrChildSection(tagSection, referenceSection)) {
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

        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);
        if (visitAccessor) {
          walks.visit(tag, WalkCode.Get);
        }

        write`<${tag.node.name}`;

        const usedAttrs = getUsedAttrs(tagName, tag.node);
        const { staticAttrs, staticControllable, skipExpression } = usedAttrs;
        const { spreadExpression } = usedAttrs;

        const isOpenOnly = !!(tagDef && tagDef.parseOptions?.openTagOnly);
        const hasChildren = !!tag.node.body.body.length;

        if (staticControllable) {
          const { helper, attrs } = staticControllable;
          const firstAttr = attrs.find(Boolean)!;
          const referencedBindings = firstAttr.value.extra?.referencedBindings;
          const values = attrs.map((attr) => attr?.value);

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
              callRuntime(`${helper}_script`, scopeIdentifier, visitAccessor),
            ),
          );
        }

        for (const attr of staticAttrs) {
          const { name, value } = attr;
          const { confident, computed } = value.extra || {};
          const valueReferences = value.extra?.referencedBindings;

          switch (name) {
            case "class":
            case "style": {
              const helper = `_attr_${name}` as const;
              if (confident) {
                write`${getHTMLRuntime()[helper](computed)}`;
              } else {
                const nodeExpr = t.memberExpression(
                  scopeIdentifier,
                  visitAccessor!,
                  true,
                );
                const meta: DelimitedAttrMeta = {
                  staticItems: undefined,
                  dynamicItems: undefined,
                  dynamicValues: undefined,
                };
                let stmt: undefined | t.Statement;
                trackDelimitedAttrValue(value, meta);

                if (meta.dynamicItems) {
                  stmt = t.expressionStatement(
                    callRuntime(helper, nodeExpr, value),
                  );
                } else {
                  if (meta.staticItems) {
                    write`${getHTMLRuntime()[helper](meta.staticItems)}`;
                  }

                  if (meta.dynamicValues) {
                    const keys = Object.keys(meta.dynamicValues);

                    if (keys.length === 1) {
                      const [key] = keys;
                      const value = meta.dynamicValues[key];
                      stmt = t.expressionStatement(
                        callRuntime(
                          `_attr_${name}_item`,
                          nodeExpr,
                          t.stringLiteral(key),
                          value,
                        ),
                      );
                    } else {
                      const props: t.ObjectExpression["properties"] = [];
                      for (const key of keys) {
                        const value = meta.dynamicValues[key];
                        props.push(
                          t.objectProperty(toPropertyName(key), value),
                        );
                      }

                      stmt = t.expressionStatement(
                        callRuntime(
                          `_attr_${name}_items`,
                          nodeExpr,
                          t.objectExpression(props),
                        ),
                      );
                    }
                  }
                }

                if (stmt) {
                  addStatement("render", tagSection, valueReferences, stmt);
                }
              }
              break;
            }
            default:
              if (confident) {
                write`${getHTMLRuntime()._attr(name, computed)}`;
              } else if (isEventHandler(name)) {
                addStatement(
                  "effect",
                  tagSection,
                  valueReferences,
                  t.expressionStatement(
                    callRuntime(
                      "_on",
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
                      "_attr",
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
          const canHaveAttrContent = !(
            isOpenOnly ||
            hasChildren ||
            usedAttrs.staticContentAttr
          );
          if (skipExpression) {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  canHaveAttrContent
                    ? "_attrs_partial_content"
                    : "_attrs_partial",
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
                  canHaveAttrContent ? "_attrs_content" : "_attrs",
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
              callRuntime("_attrs_script", scopeIdentifier, visitAccessor),
            ),
            false,
          );
        }

        if (usedAttrs.staticContentAttr) {
          const contentAttrValue = usedAttrs.staticContentAttr.value;
          addStatement(
            "render",
            tagSection,
            contentAttrValue.extra?.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "_attr_content",
                scopeIdentifier,
                visitAccessor,
                contentAttrValue,
              ),
            ),
          );
        }

        if (isOpenOnly) {
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

        walks.enter(tag);
      },
      exit(tag) {
        const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());

        if (!openTagOnly) {
          writer.writeTo(tag)`</${tag.node.name}>`;
        }

        walks.exit(tag);
        tag.remove();
      },
    },
  }),
} satisfies TemplateVisitor<t.MarkoTag>;

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
          helper: "_attr_input_checked",
          attrs: [attrs.checked, attrs.checkedChange],
        } as const;
      }

      if (attrs.checkedValue || attrs.checkedValueChange) {
        return {
          special: true,
          helper: "_attr_input_checkedValue",
          attrs: [attrs.checkedValue, attrs.checkedValueChange, attrs.value],
        } as const;
      }

      if (attrs.value || attrs.valueChange) {
        return {
          special: false,
          helper: "_attr_input_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "select":
      if (attrs.value || attrs.valueChange) {
        return {
          special: true,
          helper: "_attr_select_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "textarea":
      if (attrs.value || attrs.valueChange) {
        return {
          special: true,
          helper: "_attr_textarea_value",
          attrs: [attrs.value, attrs.valueChange],
        } as const;
      }
      break;
    case "details":
    case "dialog":
      if (attrs.open || attrs.openChange) {
        return {
          special: false,
          helper: `_attr_${tagName}_open`,
          attrs: [attrs.open, attrs.openChange],
        } as const;
      }
      break;
  }
}

function getUsedAttrs(tagName: string, tag: t.MarkoTag) {
  const seen: Record<string, t.MarkoAttribute> = {};
  const { attributes } = tag;
  const maybeStaticAttrs = new Set<t.MarkoAttribute>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let skipProps: undefined | t.ObjectExpression["properties"];
  let staticControllable: RelatedControllable;
  let staticContentAttr: undefined | t.MarkoAttribute;

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
    } else if (
      !seen[attr.name] ||
      !(attr.name === "content" && tag.body.body.length)
    ) {
      seen[attr.name] = attr;
      if (spreadProps) {
        spreadProps.push(toObjectProperty(attr.name, attr.value));
      } else if (attr.name === "content" && tagName !== "meta") {
        staticContentAttr = attr;
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

    spreadExpression = propsToExpression(spreadProps);
  }

  if (skipProps) {
    skipExpression = t.objectExpression(skipProps);
  }

  return {
    staticAttrs,
    staticContentAttr,
    staticControllable,
    spreadExpression,
    skipExpression,
  };
}

interface DelimitedAttrMeta {
  staticItems: undefined | unknown[];
  dynamicItems: undefined | (t.Expression | t.SpreadElement)[];
  dynamicValues: undefined | Record<string, t.Expression>;
}
function trackDelimitedAttrValue(expr: t.Expression, meta: DelimitedAttrMeta) {
  switch (expr.type) {
    case "ObjectExpression":
      trackDelimitedAttrObjectProperties(expr, meta);
      break;
    case "ArrayExpression":
      trackDelimitedAttrArrayItems(expr, meta);
      break;
    default:
      (meta.dynamicItems ||= []).push(expr);
      break;
  }
}

function trackDelimitedAttrArrayItems(
  arr: t.ArrayExpression,
  meta: DelimitedAttrMeta,
) {
  for (const item of arr.elements) {
    if (item) {
      switch (item.type) {
        case "ArrayExpression": {
          trackDelimitedAttrArrayItems(item, meta);
          break;
        }
        case "ObjectExpression": {
          trackDelimitedAttrObjectProperties(item, meta);
          break;
        }
        case "SpreadElement":
          if (item.argument.type === "ArrayExpression") {
            trackDelimitedAttrArrayItems(item.argument, meta);
          } else {
            (meta.dynamicItems ||= []).push(item);
          }
          break;
        default: {
          const evalItem = evaluate(item);
          if (evalItem.confident) {
            (meta.staticItems ||= []).push(evalItem.computed);
          } else {
            (meta.dynamicItems ||= []).push(item);
          }
          break;
        }
      }
    }
  }
}

function trackDelimitedAttrObjectProperties(
  obj: t.ObjectExpression,
  meta: DelimitedAttrMeta,
) {
  let staticProps: Record<string, unknown> | undefined;
  let dynamicProps: t.ObjectExpression["properties"] | undefined;
  for (const prop of obj.properties) {
    if (prop.type !== "ObjectProperty" || prop.computed) {
      (dynamicProps ||= []).push(prop);
      continue;
    }

    let key: string;
    if (prop.key.type === "Identifier") {
      key = prop.key.name;
    } else {
      const keyEval = evaluate(prop.key as t.Expression);
      if (keyEval.confident) {
        key = keyEval.computed + "";
      } else {
        (dynamicProps ||= []).push(prop);
        continue;
      }
    }

    const value = prop.value as t.Expression;
    const propEval = evaluate(value);
    if (propEval.confident) {
      (staticProps ||= {})[key] = propEval.computed;
    } else {
      (meta.dynamicValues ||= {})[key] = value;
    }
  }

  if (staticProps) {
    (meta.staticItems ||= []).push(staticProps);
  }

  if (dynamicProps) {
    (meta.dynamicItems ||= []).push(t.objectExpression(dynamicProps));
  }
}

function isChangeHandler(propName: string) {
  return /^(?:value|checked(?:Value)?|open)Change/.test(propName);
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}
