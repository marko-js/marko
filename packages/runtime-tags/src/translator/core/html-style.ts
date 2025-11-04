// TODO: this shares a bunch of logic with the native tag translator.
// we should probably attempt to share that logic where possible.
// Also need to ensure it stays in sync.

import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { getEventHandlerName, isEventHandler } from "../../common/helpers";
import { WalkCode } from "../../common/types";
import { bodyToTextLiteral } from "../util/body-to-text-literal";
import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import { type Opt, push } from "../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
  getScopeAccessorLiteral,
  mergeReferences,
  trackDomVarReferences,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { toObjectProperty } from "../util/to-property-name";
import { propsToExpression } from "../util/translate-attrs";
import { translateDomVar } from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const kNodeBinding = Symbol("style tag node binding");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNodeBinding]?: Binding;
  }
}

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);

    const { node } = tag;
    if (node.var && !t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "Tag variables on native elements cannot be destructured.",
        );
    }

    const seen: Record<string, t.MarkoAttribute> = {};
    const { attributes } = tag.node;
    let spreadReferenceNodes: t.Node[] | undefined;
    let exprExtras: Opt<t.NodeExtra>;
    let hasEventHandlers = false;
    let hasDynamicAttributes = false;

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

        if (isEventHandler(attr.name)) {
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
      } else {
        exprExtras = push(exprExtras, valueExtra);
      }
    }

    const bodyPlaceholderNodes: t.Node[] = [];
    let hasBodyPlaceholders = false;
    for (const child of tag.node.body.body) {
      if (t.isMarkoPlaceholder(child)) {
        bodyPlaceholderNodes.push(child.value);
        hasBodyPlaceholders = true;
      } else if (!t.isMarkoText(child)) {
        throw tag.hub.buildError(
          child,
          "Invalid child. Only text is allowed inside an html-style.",
        );
      }
    }

    if (
      node.var ||
      hasEventHandlers ||
      hasDynamicAttributes ||
      hasBodyPlaceholders
    ) {
      const tagExtra = (node.extra ??= {});
      const tagSection = getOrCreateSection(tag);
      const nodeBinding = (tagExtra[kNodeBinding] = createBinding(
        "#style",
        BindingType.dom,
        tagSection,
      ));
      if (hasEventHandlers) {
        getProgram().node.extra.isInteractive = true;
      }

      if (spreadReferenceNodes) {
        mergeReferences(tagSection, tag.node, spreadReferenceNodes);
      }

      if (hasBodyPlaceholders) {
        exprExtras = push(
          exprExtras,
          bodyPlaceholderNodes.length === 1
            ? (bodyPlaceholderNodes[0].extra ??= {})
            : mergeReferences(
                tagSection,
                bodyPlaceholderNodes[0],
                bodyPlaceholderNodes.slice(1),
              ),
        );
      }

      trackDomVarReferences(tag, nodeBinding);

      addSerializeExpr(
        tagSection,
        !!(node.var || hasEventHandlers),
        nodeBinding,
      );

      addSerializeExpr(tagSection, push(exprExtras, tagExtra), nodeBinding);
    }
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const isHTML = isOutputHTML();
      const write = writer.writeTo(tag);
      const tagSection = getSection(tag);

      if (isHTML) {
        translateDomVar(tag, nodeBinding);
      }

      if (nodeBinding) {
        walks.visit(tag, WalkCode.Get);
      }

      write`<style`;

      const usedAttrs = getUsedAttrs(tag.node);
      const { staticAttrs, skipExpression, spreadExpression } = usedAttrs;

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
                    createScopeReadExpression(nodeBinding!),
                    value,
                  ),
                ),
              );
            }
            break;
          }
          default:
            if (confident) {
              write`${getHTMLRuntime()._attr(name, computed)}`;
            } else if (isHTML) {
              if (isEventHandler(name)) {
                addHTMLEffectCall(tagSection, valueReferences);
              } else {
                write`${callRuntime("_attr", t.stringLiteral(name), value)}`;
              }
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
              );
            }

            break;
        }
      }

      if (spreadExpression) {
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);
        if (isHTML) {
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (skipExpression) {
            write`${callRuntime("_attrs_partial", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(tagSection), t.stringLiteral("style"))}`;
          } else {
            write`${callRuntime("_attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(tagSection), t.stringLiteral("style"))}`;
          }
        } else {
          if (skipExpression) {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "_attrs_partial",
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
                  "_attrs",
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
      }

      write`>`;
      walks.enter(tag);
    },
    exit(tag) {
      const tagSection = getSection(tag);
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const write = writer.writeTo(tag);

      if (isOutputHTML()) {
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            write`${child.value}`;
          } else if (t.isMarkoPlaceholder(child)) {
            write`${callRuntime("_escape_style", child.value)}`;
          }
        }
      } else {
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
          );
        }
      }

      write`</style>`;

      if (nodeBinding) {
        writer.markNode(
          tag,
          nodeBinding,
          getSerializeReason(tagSection, nodeBinding),
        );
      }

      walks.exit(tag);
      tag.remove();
    },
  },
  "@disabled": "#html-disabled",
  "@media": "#html-media",
  "@nonce": "#html-nonce",
  "@type": "#html-type",
  "attribute-groups": ["html-attributes"],
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
  autocomplete: [
    {
      description:
        "Use instead of `<style>` to render a native tag directly, without processing by Marko.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#html-script--html-style",
    },
  ],
} as Tag;

function getUsedAttrs(tag: t.MarkoTag) {
  const seen: Record<string, t.MarkoAttribute> = {};
  const { attributes } = tag;
  const maybeStaticAttrs = new Set<t.MarkoAttribute>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let skipProps: undefined | t.ObjectExpression["properties"];
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      if (!spreadProps) {
        spreadProps = [];
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

  const staticAttrs = [...maybeStaticAttrs].reverse();

  if (spreadProps) {
    spreadProps.reverse();

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
    spreadExpression,
    skipExpression,
  };
}
