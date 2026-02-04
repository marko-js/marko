import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getProgram,
  getTagDef,
} from "@marko/compiler/babel-utils";

import { assertExclusiveAttrs } from "../../../common/errors";
import { getEventHandlerName, isEventHandler } from "../../../common/helpers";
import { WalkCode } from "../../../common/types";
import { bodyToTextLiteral } from "../../util/body-to-text-literal";
import evaluate from "../../util/evaluate";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getAccessorProp } from "../../util/get-accessor-char";
import { getTagName } from "../../util/get-tag-name";
import { isTextOnlyNativeTag } from "../../util/is-non-html-text";
import { isOutputHTML } from "../../util/marko-config";
import { type Opt, push } from "../../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  dropNodes,
  getScopeAccessorLiteral,
  mergeReferences,
  trackDomVarReferences,
} from "../../util/references";
import { callRuntime, getHTMLRuntime } from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../../util/sections";
import { getSerializeGuard } from "../../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../../util/serialize-reasons";
import { addHTMLEffectCall, addStatement } from "../../util/signals";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
import { type TemplateVisitor, translateByTarget } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSkipEndTag = Symbol("skip native tag mark");
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
    [kTagContentAttr]?: true;
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
            "Tag variables on [native tags](https://markojs.com/docs/reference/native-tag) cannot be destructured.",
          );
      }

      const tagName = getCanonicalTagName(tag);
      const isTextOnly = isTextOnlyNativeTag(tag);
      const seen: Record<string, t.MarkoAttribute> = {};
      const { attributes } = tag.node;
      let injectNonce = isInjectNonceTag(tagName);
      let hasDynamicAttributes = false;
      let hasEventHandlers = false;
      let relatedControllable: RelatedControllable;
      let spreadReferenceNodes: t.Node[] | undefined;
      let exprExtras: Opt<t.NodeExtra>;

      for (let i = attributes.length; i--; ) {
        const attr = attributes[i];
        const valueExtra = (attr.value.extra ??= {});

        if (t.isMarkoAttribute(attr)) {
          if (seen[attr.name]) {
            // drop references for duplicated attributes.
            dropNodes(attr.value);
            continue;
          }

          seen[attr.name] = attr;

          if (injectNonce && attr.name === "nonce") {
            injectNonce = false;
          }

          if (
            isEventHandler(attr.name) ||
            isNativeTagChangeHandler(attr.name)
          ) {
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
          exprExtras = push(exprExtras, valueExtra);
        }
      }

      assertExclusiveAttrs(seen, (msg) => {
        throw tag.get("name").buildCodeFrameError(msg);
      });

      let textPlaceholders: undefined | t.Node[];
      if (isTextOnly) {
        for (const child of tag.node.body.body) {
          if (t.isMarkoPlaceholder(child)) {
            (textPlaceholders ||= []).push(child.value);
          } else if (!t.isMarkoText(child)) {
            throw tag.hub.buildError(
              child,
              `Only text is allowed inside a \`<${tagName}>\`.`,
            );
          }
        }
      }

      if (
        node.var ||
        hasDynamicAttributes ||
        hasEventHandlers ||
        textPlaceholders ||
        injectNonce ||
        getRelatedControllable(tagName, seen)?.special
      ) {
        const tagExtra = (node.extra ??= {});
        const tagSection = getOrCreateSection(tag);
        const nodeBinding = (tagExtra[kNativeTagBinding] = createBinding(
          "#" + getCanonicalTagName(tag),
          BindingType.dom,
          tagSection,
          undefined,
          undefined,
          undefined,
          undefined,
          !!node.var,
        ));

        if (hasEventHandlers) {
          getProgram().node.extra.isInteractive = true;
        }

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

        if (textPlaceholders) {
          exprExtras = push(
            exprExtras,
            textPlaceholders.length === 1
              ? (textPlaceholders[0].extra ??= {})
              : mergeReferences(
                  tagSection,
                  textPlaceholders[0],
                  textPlaceholders.slice(1),
                ),
          );
        }

        addSerializeExpr(
          tagSection,
          !!(node.var || hasEventHandlers),
          nodeBinding,
        );

        trackDomVarReferences(tag, nodeBinding);

        addSerializeExpr(tagSection, push(exprExtras, tagExtra), nodeBinding);
      }
    },
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagName = getCanonicalTagName(tag);
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

        write`<${tagName}`;

        const usedAttrs = getUsedAttrs(tagName, tag.node);
        const {
          staticAttrs,
          staticControllable,
          staticContentAttr,
          skipExpression,
          injectNonce,
        } = usedAttrs;
        let { spreadExpression } = usedAttrs;

        if (injectNonce) {
          write`${callRuntime("_attr_nonce")}`;
        }

        if (staticControllable) {
          if (tagName !== "select" && tagName !== "textarea") {
            write`${callRuntime(
              staticControllable.helper,
              getScopeIdIdentifier(tagSection),
              visitAccessor,
              ...staticControllable.attrs.map((attr) => attr?.value),
            )}`;
          }

          if (!(staticControllable.special && !staticControllable.attrs[1])) {
            addHTMLEffectCall(tagSection, undefined);
          }
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

          if (valueChange) {
            writeAtStartOfBody = callRuntime(
              "_attr_textarea_value",
              getScopeIdIdentifier(getSection(tag)),
              visitAccessor,
              value,
              valueChange,
            );
          } else if (value) {
            writeAtStartOfBody = callRuntime("_escape_text", value);
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
        const isTextOnly = isTextOnlyNativeTag(tag);
        const hasChildren = !!tag.node.body.body.length;

        if (spreadExpression) {
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (isTextOnly || isOpenOnly || hasChildren || staticContentAttr) {
            if (skipExpression) {
              write`${callRuntime(
                "_attrs_partial",
                spreadExpression,
                skipExpression,
                visitAccessor,
                getScopeIdIdentifier(tagSection),
                t.stringLiteral(tagName),
              )}`;
            } else {
              write`${callRuntime(
                "_attrs",
                spreadExpression,
                visitAccessor,
                getScopeIdIdentifier(tagSection),
                t.stringLiteral(tagName),
              )}`;
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
        } else if (isTextOnly) {
          write`>`;
        } else if (staticContentAttr) {
          write`>`;
          tagExtra[kTagContentAttr] = true;
          (tag.node.body.body as t.Statement[]) = [
            t.expressionStatement(
              callRuntime(
                "_attr_content",
                visitAccessor,
                getScopeIdIdentifier(tagSection),
                staticContentAttr.value,
                getSerializeGuard(
                  tagSection,
                  nodeBinding && getSerializeReason(tagSection, nodeBinding),
                  true,
                ),
              ),
            ),
          ];
        } else if (spreadExpression && !hasChildren) {
          const serializeReason = getSerializeGuard(
            tagSection,
            nodeBinding && getSerializeReason(tagSection, nodeBinding),
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
                    t.stringLiteral(tagName),
                    serializeReason,
                  ),
                )
              : t.expressionStatement(
                  callRuntime(
                    "_attrs_content",
                    spreadExpression,
                    visitAccessor,
                    getScopeIdIdentifier(tagSection),
                    t.stringLiteral(tagName),
                    serializeReason,
                  ),
                ),
          ];
        } else {
          write`>`;
        }

        if (writeAtStartOfBody) {
          write`${writeAtStartOfBody}`;
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const isOpenOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const isTextOnly = isTextOnlyNativeTag(tag);
        const selectArgs = htmlSelectArgs.get(tag.node);
        const tagName = getCanonicalTagName(tag);
        const tagSection = getSection(tag);
        const markerSerializeReason =
          !tagExtra[kSkipEndTag] &&
          nodeBinding &&
          getSerializeReason(tagSection, nodeBinding);
        const write = writer.writeTo(
          tag,
          !markerSerializeReason && (tagName === "html" || tagName === "body"),
        );

        if (tagExtra[kTagContentAttr]) {
          writer.flushBefore(tag);
        }

        if (selectArgs) {
          if (!tagExtra[kSkipEndTag]) {
            write`</${tagName}>`;
          }

          writer.flushInto(tag);
          tag.insertBefore(
            t.expressionStatement(
              callRuntime(
                "_attr_select_value",
                getScopeIdIdentifier(getSection(tag)),
                nodeBinding && getScopeAccessorLiteral(nodeBinding),
                selectArgs.value,
                selectArgs.valueChange,
                t.arrowFunctionExpression(
                  [],
                  t.blockStatement(tag.node.body.body),
                ),
              ),
            ),
          );
        } else if (isTextOnly) {
          for (const child of tag.node.body.body) {
            if (t.isMarkoText(child)) {
              write`${child.value}`;
            } else if (t.isMarkoPlaceholder(child)) {
              write`${callRuntime(getTextOnlyEscapeHelper(tagName), child.value)}`;
            }
          }
        } else {
          tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());
        }

        if (!tagExtra[kSkipEndTag] && !isOpenOnly && !selectArgs) {
          write`</${tagName}>`;
        }

        if (markerSerializeReason) {
          writer.markNode(tag, nodeBinding, markerSerializeReason);
        }

        tag.remove();
      },
    },
    dom: {
      enter(tag) {
        const tagName = getCanonicalTagName(tag);
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

        if (nodeBinding) {
          walks.visit(tag, WalkCode.Get);
        }

        write`<${tagName}`;

        const {
          staticAttrs,
          staticControllable,
          staticContentAttr,
          skipExpression,
          spreadExpression,
          injectNonce,
        } = getUsedAttrs(tagName, tag.node);
        const isOpenOnly = !!(tagDef && tagDef.parseOptions?.openTagOnly);
        const isTextOnly = isTextOnlyNativeTag(tag);
        const hasChildren = !!tag.node.body.body.length;

        if (injectNonce) {
          addStatement(
            "render",
            tagSection,
            undefined,
            t.expressionStatement(
              callRuntime(
                "_attr_nonce",
                scopeIdentifier,
                getScopeAccessorLiteral(nodeBinding!),
              ),
            ),
            undefined,
            true,
          );
        }

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

          if (!(staticControllable.special && !attrs[1])) {
            addStatement(
              "effect",
              tagSection,
              undefined,
              t.expressionStatement(
                callRuntime(`${helper}_script`, scopeIdentifier, visitAccessor),
              ),
            );
          }
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
                const nodeExpr = createScopeReadExpression(nodeBinding!);
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
                  addStatement(
                    "render",
                    tagSection,
                    valueReferences,
                    stmt,
                    undefined,
                    !!meta.dynamicItems,
                  );
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
                      createScopeReadExpression(nodeBinding!),
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
                      createScopeReadExpression(nodeBinding!),
                      t.stringLiteral(name),
                      value,
                    ),
                  ),
                  undefined,
                  true,
                );
              }

              break;
          }
        }

        if (spreadExpression) {
          const canHaveAttrContent = !(
            isTextOnly ||
            isOpenOnly ||
            hasChildren ||
            staticContentAttr
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

        if (staticContentAttr) {
          addStatement(
            "render",
            tagSection,
            staticContentAttr.value.extra?.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "_attr_content",
                scopeIdentifier,
                visitAccessor,
                staticContentAttr.value,
              ),
            ),
            undefined,
            true,
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
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const tagName = getCanonicalTagName(tag);

        if (!openTagOnly) {
          const write = writer.writeTo(tag);
          if (tagName !== "textarea" && isTextOnlyNativeTag(tag)) {
            const textLiteral = bodyToTextLiteral(tag.node.body);
            if (t.isStringLiteral(textLiteral)) {
              write`${textLiteral}`;
            } else {
              addStatement(
                "render",
                getSection(tag),
                textLiteral.extra?.referencedBindings,
                t.expressionStatement(
                  callRuntime(
                    "_text_content",
                    createScopeReadExpression(nodeBinding!),
                    textLiteral,
                  ),
                ),
                undefined,
                true,
              );
            }
          } else {
            tag
              .insertBefore(tag.node.body.body)
              .forEach((child) => child.skip());
          }

          write`</${tagName}>`;
        }

        walks.exit(tag);
        tag.remove();
      },
    },
  }),
} satisfies TemplateVisitor<t.MarkoTag>;

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
  const skipProps = new Set<string>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let staticControllable: RelatedControllable;
  let staticContentAttr: undefined | t.MarkoAttribute;
  let injectNonce = isInjectNonceTag(tagName);
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
      !(seen[attr.name] || (attr.name === "content" && tag.body.body.length))
    ) {
      seen[attr.name] = attr;

      if (injectNonce && attr.name === "nonce") {
        injectNonce = false;
      }

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
    if (staticControllable) {
      for (const attr of staticControllable.attrs) {
        if (attr) {
          skipProps.add(attr.name);
        }
      }
    }

    for (const { name } of staticAttrs) {
      if (isEventHandler(name)) {
        skipProps.add(`on-${getEventHandlerName(name)}`);
      } else {
        skipProps.add(name);
      }
    }

    if (injectNonce) {
      injectNonce = false;
      spreadProps.push(
        t.objectProperty(
          t.identifier("nonce"),
          t.memberExpression(
            isOutputHTML()
              ? callRuntime("$global")
              : toMemberExpression(scopeIdentifier, getAccessorProp().Global),
            t.identifier("cspNonce"),
          ),
        ),
      );
    }

    spreadExpression = propsToExpression(spreadProps.reverse());
  }

  if (skipProps.size) {
    skipExpression = t.objectExpression(
      Array.from(skipProps, (name) =>
        toObjectProperty(name, t.numericLiteral(1)),
      ),
    );
  }

  return {
    injectNonce,
    staticAttrs,
    staticContentAttr,
    staticControllable,
    spreadExpression,
    skipExpression,
  };
}

function isInjectNonceTag(tagName: string) {
  switch (tagName) {
    case "script":
    case "style":
      return true;
    default:
      return false;
  }
}

function getCanonicalTagName(tag: t.NodePath<t.MarkoTag>) {
  const tagName = getTagName(tag)!;
  switch (tagName) {
    case "html-script":
      return "script";
    case "html-style":
      return "style";
    default:
      return tagName;
  }
}

function getTextOnlyEscapeHelper(tagName: string) {
  switch (tagName) {
    case "script":
      return "_escape_script";
    case "style":
      return "_escape_style";
    default:
      return "_escape_text";
  }
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

function isNativeTagChangeHandler(propName: string) {
  return /^(?:value|checked(?:Value)?|open)Change$/.test(propName);
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}
