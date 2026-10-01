import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  computeNode,
  diagnosticWarn,
  getFile,
  getProgram,
  getTagDef,
} from "@marko/compiler/babel-utils";

import { assertExclusiveAttrs } from "../../../common/errors";
import {
  getEventHandlerName,
  getWrongAttrSuggestion,
  isEventHandler,
  stringifyClassObject,
  toDelimitedString,
} from "../../../common/helpers";
import { WalkCode } from "../../../common/types";
import { BindingType, createBinding } from "../../util/bindings";
import {
  bodyToRawTextLiteral,
  bodyToTextLiteral,
} from "../../util/body-to-text-literal";
import { isEndTagWrittenByBranch } from "../../util/branch-tag";
import evaluate from "../../util/evaluate";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-enums";
import { getTagName } from "../../util/get-tag-name";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  getMarkoOpts,
  isOptimize,
  isOutputHTML,
} from "../../util/marko-config";
import normalizeStringExpression from "../../util/normalize-string-expression";
import { type Opt, push } from "../../util/optional";
import { addReasonExprs, addReason, getWriteReason } from "../../util/reasons";
import {
  dropNodes,
  getCanonicalExtra,
  mergeReferenceGroup,
  mergeReferences,
  trackDomVarReferences,
  isTagVarRead,
} from "../../util/references";
import {
  callRuntime,
  type DOMRuntimeFeature,
  getHTMLRuntime,
  importRuntime,
  importRuntimeFeature,
} from "../../util/runtime";
import {
  getPrefixedScopeAccessor,
  getScopeAccessorLiteral,
} from "../../util/scope-accessor";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type StructureVisit,
} from "../../util/sections";
import { addSetupExpr, addSetupWork } from "../../util/setup-work";
import {
  addHTMLEffectCall,
  addStatement,
  setSectionDebugVar,
} from "../../util/signals";
import { findSlot, getSlot } from "../../util/slots";
import { ALWAYS } from "../../util/sources";
import * as structure from "../../util/structure";
import { getTagFacts } from "../../util/tag-facts";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
import { type TemplateVisitor, translateByTarget } from "../../util/visitors";
import { getWriteGuard } from "../../util/write-guard";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";

const kVisitOp = Symbol("native tag structure visit");
const kNativeAttrs = Symbol("native tag attrs");

// Tags whose body html translate replaced with a content attribute write.
const htmlContentAttrTags = new WeakSet<t.MarkoTag>();
const htmlSelectArgs = new WeakMap<
  t.MarkoTag,
  {
    helper: "_attr_select_value" | "_attrs_select_value";
    args: t.Expression[];
  }
>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kVisitOp]?: StructureVisit;
    [kNativeAttrs]?: NativeAttrs;
  }
}

// A native tag's attributes by position, which each output's clone keeps:
// analysis settles what each one is and both outputs write from it.
interface NativeAttrs {
  /** Attributes written on their own, apart from the controllable pair. */
  own: number[] | undefined;
  /** Event handlers the element attaches on its own, in source order. */
  handlers: number[] | undefined;
  /** The `content` attribute rendering in place of a body. */
  content: number | undefined;
  /** Attributes controlling an element state, its change handler second. */
  controllable: Controllable | undefined;
  /** Attributes written as one object with the spreads, in write order. */
  spread: number[] | undefined;
  /** No attribute sets the nonce the page requires of it. */
  nonceUnset: boolean;
}

type HandlerAttr = t.MarkoAttribute & { name: `on${string}` };

interface Controllable {
  state: "checked" | "checkedValue" | "value" | "open";
  special: boolean;
  valueMode?: "attribute" | "dynamic";
  attrs: (number | undefined)[];
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
      const tagFacts = getTagFacts(tag);
      if (tagFacts.pageElement) {
        getProgram().node.extra.page ??= true;
      }

      if (tagName === "option") {
        assertOptionInSelectWithValue(tag);
      }

      const isTextOnly = tagFacts.textBody;
      const { attributes } = tag.node;
      const tagSection = getOrCreateSection(tag);
      // One pass over the attributes, last to first so a repeated one's last value
      // wins: classifies them, drops unwritten values, records each value's facts.
      const indexByName: Record<string, number | undefined> =
        Object.create(null);
      const pairNames = controllableAttrNames.get(tagName);
      let own: number[] | undefined;
      let handlers: number[] | undefined;
      let content: number | undefined;
      let controllable: Controllable | undefined;
      let spread: number[] | undefined;
      let hasDynamicAttributes = false;
      let hasEventHandlers = false;

      for (let i = attributes.length; i--;) {
        const attr = attributes[i];
        if (t.isMarkoSpreadAttribute(attr)) {
          const valueExtra = (attr.value.extra ??= {});
          valueExtra.isEffect = true;
          valueExtra.retained = true;
          hasEventHandlers = true;
          hasDynamicAttributes = true;
          if (!spread) {
            spread = [];
            controllable = getRelatedControllable(
              tagName,
              attributes,
              indexByName,
            );
            own = addUnpaired(own, pairNames, indexByName, controllable);
            if (controllable && !controllable.attrs.every(isDefined)) {
              // The spread may set what an incomplete pair leaves out, so the pair
              // is written with it.
              for (const index of controllable.attrs) {
                if (index !== undefined) spread.push(index);
              }

              controllable = undefined;
            }
          }
          spread.push(i);
        } else if (
          indexByName[attr.name] !== undefined ||
          (attr.name === "content" && tag.node.body.body.length)
        ) {
          // A value nothing writes creates no dead binding, slot, or marker.
          diagnosticWarn(tag, {
            label:
              indexByName[attr.name] === undefined
                ? `The \`content\` attribute on \`<${tagName}>\` is ignored; its body is rendered instead.`
                : `The \`${attr.name}\` attribute is set more than once on \`<${tagName}>\`; only the last value is used.`,
            loc: attr.loc ?? undefined,
          });
          dropNodes(attr.value);
        } else {
          const valueExtra = (attr.value.extra ??= {});
          const isEventHandlerAttr = isEventHandler(attr.name);
          const isChangeHandlerAttr =
            !isEventHandlerAttr && isEventOrChangeHandler(attr.name);
          indexByName[attr.name] = i;
          assertValidNativeAttrName(tag, attr);
          assertNativeAttrValueType(tag, attr);
          if (attr.name === "style") warnCamelCaseStyleKeys(tag, attr);
          if (isEventHandlerAttr || isChangeHandlerAttr) {
            assertNativeHandlerAttr(tag, attr);
          }

          if (isEventHandlerAttr) {
            valueExtra.isEffect = true;
            valueExtra.consumed = true;
            // Attached once and only invoked, so reads inside can be lazy.
            valueExtra.invokeOnly = true;
            hasEventHandlers = true;
            addSetupExpr(tagSection, attr.value);
          } else {
            assertValidNativeEventHandlerAttr(tag, attr);
            if (isChangeHandlerAttr) valueExtra.retained = true;
            if (!evaluate(attr.value).confident) {
              hasDynamicAttributes = true;
              addSetupExpr(tagSection, attr.value);
            } else if (attr.name === "content" && tagName !== "meta") {
              // Content is rendered by the client whatever its value.
              addSetupExpr(tagSection, attr.value);
            }
          }

          if (spread) {
            spread.push(i);
          } else if (attr.name === "content" && tagName !== "meta") {
            content = i;
          } else if (isEventHandlerAttr) {
            (handlers ||= []).push(i);
          } else if (!pairNames?.includes(attr.name)) {
            (own ||= []).push(i);
          }
        }
      }

      own?.reverse();
      if (!spread) {
        controllable = getRelatedControllable(tagName, attributes, indexByName);
        // A pair nothing can update writes as plain attributes.
        if (
          controllable &&
          !controllable.special &&
          controllable.attrs[1] === undefined &&
          evaluate(attributes[controllable.attrs.find(isDefined)!].value)
            .confident
        ) {
          controllable = undefined;
        }
        own = addUnpaired(own, pairNames, indexByName, controllable);
      }

      // A controllable's change handler is attached like an event handler.
      if (controllable?.attrs[1] !== undefined) hasEventHandlers = true;

      assertExclusiveAttrs(
        indexByName,
        (msg) => {
          throw tag.get("name").buildCodeFrameError(msg);
        },
        isDefined,
      );

      const contentAttr = attrAt(attributes, indexByName.content);
      if (contentAttr) {
        const tagDef = getTagDef(tag);
        // `<meta content=x>` is a real html attribute, not renderable content.
        if (tagDef?.parseOptions?.openTagOnly && !tagDef.attributes?.content) {
          throw tag.hub.buildError(
            contentAttr,
            `The \`<${tagName}>\` tag cannot have content, so it does not support the \`content\` attribute.`,
          );
        }

        if (isTextOnly) {
          throw tag.hub.buildError(
            contentAttr,
            `The \`<${tagName}>\` tag takes its content from its body as text, so it does not support the \`content\` attribute.`,
          );
        }
      }

      const valueChangeAttr =
        tagName === "input"
          ? attrAt(attributes, indexByName.valueChange)
          : undefined;
      const valueChangeEval =
        valueChangeAttr && evaluate(valueChangeAttr.value);
      const typeAttr = attrAt(attributes, indexByName.type);
      if (
        valueChangeEval &&
        !(valueChangeEval.confident && valueChangeEval.computed == null) &&
        getInputValueMode(typeAttr) === "attribute"
      ) {
        const type = evaluate(typeAttr!.value).computed as string;
        throw tag.hub.buildError(
          valueChangeAttr,
          `\`valueChange\` cannot be used on a \`type="${type}"\` \`<input>\` — user interaction can never change its \`value\`.` +
            (/^[cr]/i.test(type)
              ? " Bind `checked` or `checkedValue` instead."
              : ""),
        );
      }

      handlers?.reverse();
      spread?.reverse();
      const nonceUnset =
        isInjectNonceTag(tagName) && indexByName.nonce === undefined;
      const tagExtra = (node.extra ??= {});

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
        nonceUnset ||
        content !== undefined ||
        controllable
      ) {
        const nodeBinding = (tagExtra.nodeBinding = createBinding(
          "#" + tagName.toLowerCase(),
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

        if (spread) {
          const spreadExtra = mergeReferences(
            tagSection,
            tag.node,
            spread.map((index) => attributes[index].value),
          );

          spreadExtra.rendersContent = true;
          // Functions in native tag attrs are only ever invoked (handlers)
          // or stringified from static source, so reads inside can be lazy.
          spreadExtra.invokeOnly = true;
        }

        let exprExtras: Opt<t.NodeExtra>;
        if (controllable) {
          const values = controllable.attrs.map((index) =>
            index === undefined ? undefined : attributes[index].value,
          );
          exprExtras = mergeReferenceGroup(tagSection, values);
        }

        if (own) {
          for (const index of own) {
            exprExtras = push(exprExtras, attributes[index].value.extra!);
          }
        }
        if (handlers) {
          for (const index of handlers) {
            exprExtras = push(exprExtras, attributes[index].value.extra!);
          }
        }
        if (content !== undefined) {
          exprExtras = push(exprExtras, attributes[content].value.extra!);
        }

        if (textPlaceholders) {
          exprExtras = push(
            exprExtras,
            textPlaceholders.length === 1
              ? (textPlaceholders[0].extra ??= {})
              : mergeReferenceGroup(tagSection, textPlaceholders),
          );
          addSetupExpr(tagSection, textPlaceholders[0]);
        }

        if (nonceUnset && !spread) {
          // A nonce statement with no references is written in setup.
          addSetupWork(tagSection);
        }

        if (controllable?.attrs[1] !== undefined) {
          // Controllable change handlers register an effect in setup.
          addSetupWork(tagSection);
        }

        if (hasEventHandlers || isTagVarRead(tag)) {
          addReason(getSlot(nodeBinding), ALWAYS);
        }

        trackDomVarReferences(tag, nodeBinding);

        addReasonExprs(getSlot(nodeBinding), push(exprExtras, tagExtra));
      }

      const write = structure.writeTo(tag);
      // Unclaimed until exit: a child control flow tag may still bind this tag
      // through the only-child optimization.
      tagExtra[kVisitOp] = structure.visit(tag, WalkCode.Get, false);

      write`<${tagName}`;

      if (own) {
        for (const index of own) {
          const { name, value } = attributes[index] as t.MarkoAttribute;
          const { confident, computed } = value.extra || {};
          if (confident) {
            write`${getStaticAttrMarkup(name, computed)}`;
          } else if (name === "class" || name === "style") {
            const meta: DelimitedAttrMeta = {
              staticItems: undefined,
              dynamicItems: undefined,
              dynamicValues: undefined,
            };
            trackDelimitedAttrValue(value, meta);
            if (!meta.dynamicItems && meta.staticItems) {
              write`${getStaticAttrMarkup(name, meta.staticItems)}`;
            }
          }
        }
      }

      write`>`;
      structure.enter(tag);
      tagExtra[kNativeAttrs] = {
        own,
        handlers,
        content,
        controllable,
        spread,
        nonceUnset,
      };
    },
    exit(tag) {
      const tagName = getCanonicalTagName(tag);
      const tagExtra = tag.node.extra!;
      const visitOp = tagExtra[kVisitOp];
      if (visitOp) visitOp.claimed = !!tagExtra.nodeBinding;

      if (!getTagDef(tag)?.parseOptions?.openTagOnly) {
        const write = structure.writeTo(tag);
        if (tagName !== "textarea" && getTagFacts(tag).textBody) {
          const textLiteral = bodyToRawTextLiteral(tag.node.body);
          if (t.isStringLiteral(textLiteral)) {
            write`${textLiteral.value}`;
          }
        }

        write`</${tagName}>`;
      }

      structure.exit(tag);
    },
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagName = getCanonicalTagName(tag);
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra.nodeBinding;
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

        const { attributes } = tag.node;
        const nativeAttrs = tagExtra[kNativeAttrs]!;
        const { own, handlers, content, controllable, spread, nonceUnset } =
          nativeAttrs;
        const contentAttr = attrAt(attributes, content);
        const skipExpression =
          spread && buildSkipExpression(attributes, nativeAttrs);
        let spreadExpression =
          spread && buildSpreadExpression(attributes, spread, nonceUnset);

        // Name the change-handler slot after the attribute the author wrote;
        // other internal slots get generic serializer descriptions instead.
        if (!isOptimize() && nodeBinding) {
          const changeAttr = attrAt(attributes, controllable?.attrs[1]);
          if (changeAttr) {
            const handler = evaluate(changeAttr.value);
            if (!(handler.confident && handler.computed == null)) {
              setSectionDebugVar(
                tagSection,
                getPrefixedScopeAccessor(
                  nodeBinding,
                  getAccessorPrefix().ControlledHandler,
                ),
                changeAttr.name,
                changeAttr.loc,
              );
            }
          } else if (spreadExpression) {
            // A lone spread is an unambiguous source; with several, a merged
            // property could come from any, so the serializer's generic
            // phrasing (plus the runtime-read property name) stays honest.
            const spreads = tag.node.attributes.filter((attr) =>
              t.isMarkoSpreadAttribute(attr),
            );
            const spreadLoc = spreads.length === 1 && spreads[0].value.loc;
            if (spreadLoc && spreadLoc.start.index != null) {
              const name =
                "..." +
                getFile().code.slice(
                  spreadLoc.start.index,
                  spreadLoc.end.index,
                );
              for (const prefix of [
                getAccessorPrefix().ControlledHandler,
                getAccessorPrefix().EventAttributes,
              ] as const) {
                if (
                  prefix !== getAccessorPrefix().ControlledHandler ||
                  getSpreadControllableValueProps(tagName)
                ) {
                  setSectionDebugVar(
                    tagSection,
                    getPrefixedScopeAccessor(nodeBinding, prefix),
                    name,
                    spreadLoc,
                  );
                }
              }
            }
          }
        }

        // A controlled `<select>` moves the whole pending buffer into its
        // content arrow at exit, so earlier siblings have to leave it first.
        if (tagName === "select" && (controllable || spreadExpression)) {
          writer.flushBefore(tag);
        }

        write`<${tagName}`;

        if (nonceUnset && !spread) {
          write`${callRuntime("_attr_nonce")}`;
        }

        if (controllable) {
          if (tagName !== "select" && tagName !== "textarea") {
            write`${callRuntime(
              getControllableHelper(tagName, controllable.state),
              getScopeIdIdentifier(tagSection),
              visitAccessor,
              ...controllable.attrs.map(
                (index) => attrAt(attributes, index)?.value,
              ),
            )}`;
          }

          if (controllable.attrs[1] !== undefined) {
            addHTMLEffectCall(tagSection, undefined);
          }
        }

        let writeAtStartOfBody: t.Expression | undefined;

        if (
          tagName === "html" &&
          getMarkoOpts().linkAssets &&
          !tag.node.body.body.some(
            (child) =>
              child.type === "MarkoTag" &&
              child.name.type === "StringLiteral" &&
              child.name.value === "head",
          )
        ) {
          // With no `<head>` child (cross-template layouts are not detected),
          // assets flush here to land in the implicit head.
          writeAtStartOfBody = callRuntime("_flush_head");
        }

        if (tagName === "select") {
          if (controllable) {
            htmlSelectArgs.set(tag.node, {
              helper: "_attr_select_value",
              args: [
                attrAt(attributes, controllable.attrs[0])?.value ||
                  buildUndefined(),
                attrAt(attributes, controllable.attrs[1])?.value ||
                  buildUndefined(),
              ],
            });
          } else if (spreadExpression) {
            const spreadIdentifier = generateUidIdentifier("select_input");
            tag.insertBefore(
              t.variableDeclaration("const", [
                t.variableDeclarator(spreadIdentifier, spreadExpression),
              ]),
            );
            htmlSelectArgs.set(tag.node, {
              helper: "_attrs_select_value",
              args: [spreadIdentifier],
            });
            spreadExpression = spreadIdentifier;
          }
        } else if (tagName === "textarea") {
          if (controllable) {
            const value = attrAt(attributes, controllable.attrs[0]);
            const valueChange = attrAt(attributes, controllable.attrs[1]);
            writeAtStartOfBody = valueChange
              ? callRuntime(
                  "_attr_textarea_value",
                  getScopeIdIdentifier(tagSection),
                  visitAccessor,
                  value?.value,
                  valueChange.value,
                )
              : callRuntime("_textarea_value", value!.value);
          } else if (spreadExpression) {
            const spreadIdentifier = generateUidIdentifier("textarea_input");
            tag.insertBefore(
              t.variableDeclaration("const", [
                t.variableDeclarator(spreadIdentifier, spreadExpression),
              ]),
            );
            writeAtStartOfBody = callRuntime(
              "_attrs_textarea_value",
              getScopeIdIdentifier(tagSection),
              visitAccessor,
              spreadIdentifier,
            );
            spreadExpression = spreadIdentifier;
          }
        }

        if (own) {
          for (const index of own) {
            const { name, value } = attributes[index] as t.MarkoAttribute;
            const { confident, computed } = value.extra || {};

            if (tagName === "option" && name === "value") {
              write`${callRuntime("_attr_option_value", value)}`;
              continue;
            }

            write`${
              confident
                ? getStaticAttrMarkup(name, computed)
                : factorAttrConditional(buildAttrExpression(name, value))
            }`;
          }
        }

        if (handlers) {
          for (const index of handlers) {
            addHTMLEffectCall(
              tagSection,
              attributes[index].value.extra?.referencedBindings,
            );
          }
        }

        const isOpenOnly = !!(tagDef && tagDef.parseOptions?.openTagOnly);
        const isTextOnly = getTagFacts(tag).textBody;
        const spreadContent =
          !!spreadExpression &&
          spreadRendersContent(tag, contentAttr, isTextOnly);

        if (spreadExpression) {
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (!spreadContent) {
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

        if (isOpenOnly || isTextOnly) {
          write`>`;
        } else if (contentAttr) {
          write`>`;
          htmlContentAttrTags.add(tag.node);
          (tag.node.body.body as t.Statement[]) = [
            t.expressionStatement(
              callRuntime(
                "_attr_content",
                visitAccessor,
                getScopeIdIdentifier(tagSection),
                contentAttr.value,
                getWriteGuard(
                  tagSection,
                  nodeBinding && getWriteReason(findSlot(nodeBinding)),
                  true,
                ),
              ),
            ),
          ];
        } else if (spreadContent) {
          const markerGuard = getWriteGuard(
            tagSection,
            nodeBinding && getWriteReason(findSlot(nodeBinding)),
            true,
          );
          htmlContentAttrTags.add(tag.node);
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
                    markerGuard,
                  ),
                )
              : t.expressionStatement(
                  callRuntime(
                    "_attrs_content",
                    spreadExpression,
                    visitAccessor,
                    getScopeIdIdentifier(tagSection),
                    t.stringLiteral(tagName),
                    markerGuard,
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
        const nodeBinding = tagExtra.nodeBinding;
        const isOpenOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const isTextOnly = getTagFacts(tag).textBody;
        const selectArgs = htmlSelectArgs.get(tag.node);
        const tagName = getCanonicalTagName(tag);
        const tagSection = getSection(tag);
        const skipEndTag = isEndTagWrittenByBranch(nodeBinding);
        const markerReason =
          !skipEndTag && nodeBinding && getWriteReason(findSlot(nodeBinding));
        const write = writer.writeTo(
          tag,
          // `</html>` defers even when marked (its `#html/0` marker resolves to
          // the root); `</body>` can't — its marker resolves positionally.
          tagName === "html" || (!markerReason && tagName === "body"),
        );

        if (htmlContentAttrTags.has(tag.node)) {
          writer.flushBefore(tag);
        }

        if (selectArgs) {
          if (!skipEndTag) {
            write`</${tagName}>`;
          }

          writer.flushInto(tag);
          tag.insertBefore(
            t.expressionStatement(
              callRuntime(
                selectArgs.helper,
                getScopeIdIdentifier(tagSection),
                nodeBinding && getScopeAccessorLiteral(nodeBinding),
                ...selectArgs.args,
                t.arrowFunctionExpression(
                  [],
                  t.blockStatement(tag.node.body.body),
                ),
              ),
            ),
          );
        } else if (isTextOnly) {
          const rawTextHelper = getRawTextEscapeHelper(tagName);
          if (rawTextHelper) {
            // Raw text escapers neutralize multi-character tokens, so the whole
            // body escapes as one string: a `</script` split across adjacent
            // interpolations slips past per-placeholder calls.
            const body = bodyToTextLiteral(tag.node.body);
            write`${
              t.isStringLiteral(body)
                ? getHTMLRuntime()[rawTextHelper](body.value)
                : callRuntime(rawTextHelper, body)
            }`;
          } else {
            for (const child of tag.node.body.body) {
              if (t.isMarkoText(child)) {
                write`${child.value}`;
              } else if (t.isMarkoPlaceholder(child)) {
                write`${callRuntime("_escape", child.value)}`;
              }
            }
          }
        } else {
          tag.insertBefore(tag.node.body.body).forEach((child) => child.skip());
        }

        if (!skipEndTag && !isOpenOnly && !selectArgs) {
          if (tagName === "head" && getMarkoOpts().linkAssets) {
            write`${callRuntime("_flush_head")}`;
          }
          write`</${tagName}>`;
        }

        if (markerReason) {
          writer.markNode(tag, nodeBinding, markerReason, tagName === "html");
        }

        tag.remove();
      },
    },
    dom: {
      enter(tag) {
        const tagExtra = tag.node.extra!;
        const { nodeBinding } = tagExtra;
        // The template holds everything a tag without a node binding writes.
        if (!nodeBinding) return;

        const tagName = getCanonicalTagName(tag);
        const tagSection = getSection(tag);
        const visitAccessor = getScopeAccessorLiteral(nodeBinding);
        const { attributes } = tag.node;
        const nativeAttrs = tagExtra[kNativeAttrs]!;
        const { own, handlers, content, controllable, spread, nonceUnset } =
          nativeAttrs;
        const contentAttr = attrAt(attributes, content);
        const skipExpression =
          spread && buildSkipExpression(attributes, nativeAttrs);
        const spreadExpression =
          spread && buildSpreadExpression(attributes, spread, nonceUnset);

        if (nonceUnset && !spread) {
          addStatement(
            "render",
            tagSection,
            undefined,
            t.expressionStatement(
              callRuntime(
                "_attr_nonce",
                scopeIdentifier,
                getScopeAccessorLiteral(nodeBinding),
              ),
            ),
            true,
          );
        }

        if (controllable) {
          const hasChangeHandler = controllable.attrs[1] !== undefined;
          const helper = getControllableHelper(tagName, controllable.state);
          const defaultHelper = getDOMControllableDefaultHelper(
            helper,
            controllable,
          );
          const { referencedBindings } = getCanonicalExtra(
            attrAt(attributes, controllable.attrs.find(isDefined))!.value
              .extra!,
          );
          const values = (
            hasChangeHandler
              ? controllable.attrs
              : controllable.attrs.toSpliced(1, 1)
          ).map((index) => attrAt(attributes, index)?.value);
          if (hasChangeHandler && defaultHelper !== `${helper}_default`) {
            values.push(importRuntime(defaultHelper));
          }

          addStatement(
            "render",
            tagSection,
            referencedBindings,
            t.expressionStatement(
              callRuntime(
                hasChangeHandler ? helper : defaultHelper,
                scopeIdentifier,
                visitAccessor,
                ...values,
              ),
            ),
          );

          if (hasChangeHandler) {
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

        if (own) {
          for (const index of own) {
            const { name, value } = attributes[index] as t.MarkoAttribute;
            const { confident } = value.extra || {};
            const valueReferences = value.extra?.referencedBindings;

            switch (name) {
              case "class":
              case "style": {
                const helper = `_attr_${name}` as const;
                if (!confident) {
                  const nodeExpr = createScopeReadExpression(nodeBinding);
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
                      true,
                    );
                  }
                }
                break;
              }
              default:
                // Confident values are recorded into the template at analyze.
                if (confident) {
                  break;
                } else {
                  addStatement(
                    "render",
                    tagSection,
                    valueReferences,
                    t.expressionStatement(
                      callRuntime(
                        "_attr",
                        createScopeReadExpression(nodeBinding),
                        t.stringLiteral(name),
                        value,
                      ),
                    ),
                    true,
                  );
                }

                break;
            }
          }
        }

        if (handlers) {
          for (const index of handlers) {
            const { name, value } = attributes[index] as HandlerAttr;
            addStatement(
              "effect",
              tagSection,
              value.extra?.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "_on",
                  createScopeReadExpression(nodeBinding),
                  t.stringLiteral(getEventHandlerName(name)),
                  value,
                ),
              ),
            );
          }
        }

        if (spreadExpression) {
          const spreadContent = spreadRendersContent(
            tag,
            contentAttr,
            getTagFacts(tag).textBody,
          );
          const name = tag.get("name");
          const staticName = name.isStringLiteral()
            ? name.node.value
            : undefined;
          const spreadClaim = !controllable && controllableClaimFor(staticName);
          if (skipExpression) {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  spreadContent ? "_attrs_partial_content" : "_attrs_partial",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                  skipExpression,
                  spreadClaim && importRuntime(spreadClaim),
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
                  spreadContent ? "_attrs_content" : "_attrs",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                  spreadClaim && importRuntime(spreadClaim),
                ),
              ),
            );
          }

          enableControllable(controllableFeatureFor(staticName));
          addStatement(
            "effect",
            tagSection,
            tagExtra.referencedBindings,
            t.expressionStatement(
              callRuntime("_attrs_script", scopeIdentifier, visitAccessor),
            ),
          );
        }

        if (contentAttr) {
          addStatement(
            "render",
            tagSection,
            contentAttr.value.extra?.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "_attr_content",
                scopeIdentifier,
                visitAccessor,
                contentAttr.value,
              ),
            ),
            true,
          );
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra.nodeBinding;
        const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const tagName = getCanonicalTagName(tag);

        if (!openTagOnly) {
          if (tagName !== "textarea" && getTagFacts(tag).textBody) {
            const textLiteral = bodyToTextLiteral(
              tag.node.body,
              tagName === "title",
            );
            if (!t.isStringLiteral(textLiteral)) {
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
                true,
              );
            }
          } else {
            tag
              .insertBefore(tag.node.body.body)
              .forEach((child) => child.skip());
          }
        }

        tag.remove();
      },
    },
  }),
} satisfies TemplateVisitor<t.MarkoTag>;

function getSpreadControllableValueProps(tagName: string) {
  switch (tagName) {
    case "input":
      return ["value", "checked", "checkedValue"];
    case "select":
    case "textarea":
      return ["value"];
    case "details":
    case "dialog":
      return ["open"];
  }
}

function getRelatedControllable(
  tagName: string,
  attributes: t.MarkoTag["attributes"],
  indexByName: Record<string, number | undefined>,
): Controllable | undefined {
  switch (tagName) {
    case "input":
      if ("checked" in indexByName || "checkedChange" in indexByName) {
        return {
          state: "checked",
          special: false,
          attrs: [indexByName.checked, indexByName.checkedChange],
        };
      }

      if (
        "checkedValue" in indexByName ||
        "checkedValueChange" in indexByName
      ) {
        return {
          state: "checkedValue",
          special: true,
          attrs: [
            indexByName.checkedValue,
            indexByName.checkedValueChange,
            indexByName.value,
          ],
        };
      }

      if ("value" in indexByName || "valueChange" in indexByName) {
        // One-way `value=` is default-value semantics on purpose (updates what
        // `form.reset()` restores), not a missing-change-handler mistake.
        const valueMode = getInputValueMode(
          attrAt(attributes, indexByName.type),
        );
        if (valueMode === "attribute" && !indexByName.valueChange) {
          break;
        }

        return {
          state: "value",
          special: false,
          attrs: [indexByName.value, indexByName.valueChange],
          valueMode,
        };
      }
      break;
    case "select":
    case "textarea":
      if ("value" in indexByName || "valueChange" in indexByName) {
        return {
          state: "value",
          special: true,
          attrs: [indexByName.value, indexByName.valueChange],
        };
      }
      break;
    case "details":
    case "dialog":
      if ("open" in indexByName || "openChange" in indexByName) {
        return {
          state: "open",
          special: false,
          attrs: [indexByName.open, indexByName.openChange],
        };
      }
      break;
  }
}

// The attributes an element's controllable pair may take.
const controllableAttrNames = new Map([
  [
    "input",
    [
      "checked",
      "checkedChange",
      "checkedValue",
      "checkedValueChange",
      "value",
      "valueChange",
    ],
  ],
  ["select", ["value", "valueChange"]],
  ["textarea", ["value", "valueChange"]],
  ["details", ["open", "openChange"]],
  ["dialog", ["open", "openChange"]],
]);

// A pair attribute the element's pair does not take is its own.
function addUnpaired(
  own: number[] | undefined,
  pairNames: string[] | undefined,
  indexByName: Record<string, number | undefined>,
  controllable: Controllable | undefined,
) {
  if (pairNames) {
    for (const name of pairNames) {
      const index = indexByName[name];
      if (index !== undefined && !controllable?.attrs.includes(index)) {
        (own ||= []).push(index);
      }
    }
  }
  return own;
}

function attrAt(
  attributes: t.MarkoTag["attributes"],
  index: number | undefined,
) {
  return index === undefined
    ? undefined
    : (attributes[index] as t.MarkoAttribute);
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function getInputValueMode(typeAttr: t.MarkoAttribute | undefined) {
  if (!typeAttr) {
    return;
  }

  const type = evaluate(typeAttr.value);
  if (!type.confident) {
    return "dynamic" as const;
  }

  if (typeof type.computed === "string") {
    switch (type.computed.toLowerCase()) {
      case "button":
      case "checkbox":
      case "hidden":
      case "image":
      case "radio":
      case "reset":
      case "submit":
        return "attribute" as const;
    }
  }
}

function getDOMControllableDefaultHelper(
  helper: ReturnType<typeof getControllableHelper>,
  { valueMode }: Controllable,
) {
  return helper === "_attr_input_value" && valueMode
    ? (`_attr_input_value_${valueMode}_default` as const)
    : (`${helper}_default` as const);
}

// With nothing else filling the element, the spread's `content` renders it.
function spreadRendersContent(
  tag: t.NodePath<t.MarkoTag>,
  staticContentAttr: t.MarkoAttribute | undefined,
  isTextOnly: boolean | undefined,
) {
  return !(
    staticContentAttr ||
    tag.node.body.body.length ||
    isTextOnly ||
    getTagDef(tag)?.parseOptions?.openTagOnly
  );
}

// The spread object both outputs write: the spreads and the attributes among
// them, with the nonce the page requires when nothing sets it.
function buildSpreadExpression(
  attributes: t.MarkoTag["attributes"],
  spread: number[],
  nonceUnset: boolean,
) {
  const props: t.ObjectExpression["properties"] = [];
  if (nonceUnset) {
    props.push(
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

  for (const index of spread) {
    const attr = attributes[index];
    props.push(
      t.isMarkoSpreadAttribute(attr)
        ? t.spreadElement(attr.value)
        : toObjectProperty(attr.name, attr.value),
    );
  }

  return propsToExpression(props);
}

// The names a spread leaves to what the element writes itself.
function buildSkipExpression(
  attributes: t.MarkoTag["attributes"],
  { own, handlers, controllable }: NativeAttrs,
) {
  const skipProps = new Set<string>();
  if (controllable) {
    for (const index of controllable.attrs) {
      if (index !== undefined) {
        skipProps.add((attributes[index] as t.MarkoAttribute).name);
      }
    }
  }

  if (own) {
    for (const index of own) {
      // Names match the DOM only as the types spell them (lowercase HTML, canonical SVG and
      // MathML camelCase); one authored in another case is removed beside a spread.
      skipProps.add((attributes[index] as t.MarkoAttribute).name);
    }
  }

  if (handlers) {
    for (const index of handlers) {
      const { name } = attributes[index] as HandlerAttr;
      skipProps.add(`on-${getEventHandlerName(name)}`);
    }
  }

  if (skipProps.size) {
    return t.objectExpression(Array.from(skipProps, toSkipProperty));
  }
}

function toSkipProperty(name: string) {
  return toObjectProperty(name, t.numericLiteral(1));
}

function getControllableHelper(tagName: string, state: Controllable["state"]) {
  switch (state) {
    case "checked":
      return "_attr_input_checked" as const;
    case "checkedValue":
      return "_attr_input_checkedValue" as const;
    case "open":
      return tagName === "details"
        ? ("_attr_details_open" as const)
        : ("_attr_dialog_open" as const);
    case "value":
      return tagName === "select"
        ? ("_attr_select_value" as const)
        : tagName === "textarea"
          ? ("_attr_textarea_value" as const)
          : ("_attr_input_value" as const);
  }
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

function assertValidNativeAttrName(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  const suggestion = getWrongAttrSuggestion(attr.name);
  if (suggestion) {
    throw tag.hub.buildError(
      attr.loc?.end &&
        ({
          loc: {
            start: attr.loc.start,
            end: {
              line: attr.loc.start.line,
              column: attr.loc.start.column + attr.name.length,
            },
          },
        } as any),
      `\`${attr.name}\` is not a valid attribute, did you mean \`${suggestion}\`?`,
      Error,
    );
  }
}

function assertNativeAttrValueType(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  const { name } = attr;
  if (
    name === "class" ||
    name === "style" ||
    name === "content" ||
    isEventOrChangeHandler(name) ||
    lowercaseEventHandlerReg.test(name)
  ) {
    return;
  }

  if (t.isFunction(attr.value)) {
    throw tag.hub.buildError(
      attr,
      `The \`${name}\` attribute cannot be a function.`,
      Error,
    );
  }

  if (t.isObjectExpression(attr.value)) {
    throw tag.hub.buildError(
      attr,
      `The \`${name}\` attribute cannot be a plain object (it would render as \`[object Object]\`).`,
      Error,
    );
  }
}

// `style=` keys are written verbatim, so a camelCased DOM name like
// `backgroundColor` becomes invalid CSS. Warn with the kebab-case equivalent.
function warnCamelCaseStyleKeys(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  const { value } = attr;
  const objects =
    value.type === "ObjectExpression"
      ? [value]
      : value.type === "ArrayExpression"
        ? value.elements.filter(
            (el): el is t.ObjectExpression => el?.type === "ObjectExpression",
          )
        : [];

  for (const object of objects) {
    for (const prop of object.properties) {
      if (prop.type !== "ObjectProperty" || prop.computed) continue;
      const { key } = prop;
      const name =
        key.type === "Identifier"
          ? key.name
          : key.type === "StringLiteral"
            ? key.value
            : undefined;
      if (
        name &&
        !name.startsWith("--") &&
        !name.includes("-") &&
        /[A-Z]/.test(name)
      ) {
        const kebab = name
          .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
          // The lowercase `ms` prefix needs a leading dash: `-ms-…`.
          .replace(/^ms-/, "-ms-");
        diagnosticWarn(tag, {
          label: `\`${name}\` is not a CSS property name; the [\`style=\` object](https://markojs.com/docs/reference/native-tag#style) writes keys out verbatim (unlike the camelCased DOM style API), so this renders as invalid CSS the browser ignores. Use the kebab-case name \`${kebab}\`.`,
          loc: key.loc ?? undefined,
        });
      }
    }
  }
}

function assertNativeHandlerAttr(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  if (t.isObjectExpression(attr.value)) {
    throw tag.hub.buildError(
      attr.value,
      `The \`${attr.name}\` ${
        isEventHandler(attr.name) ? "event handler" : "change handler"
      } on a [native tag](https://markojs.com/docs/reference/native-tag) must be a function. Attribute values in Marko are plain JavaScript expressions, not JSX; remove the wrapping \`{ }\` (e.g. \`${attr.name}=myHandler\` or \`${attr.name}() { ... }\`).`,
      Error,
    );
  }
  if (computeNode(attr.value)?.value) {
    throw tag.hub.buildError(
      attr.value,
      `The \`${attr.name}\` ${
        isEventHandler(attr.name) ? "event handler" : "change handler"
      } on a [native tag](https://markojs.com/docs/reference/native-tag) must be a function or a falsey value (\`null\`, \`undefined\`, \`false\`, \`0\`, …).`,
      Error,
    );
  }
}

const lowercaseEventHandlerReg = /^on[a-z]/;

function assertValidNativeEventHandlerAttr(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  if (!lowercaseEventHandlerReg.test(attr.name)) return;

  const { value } = attr;
  let invalid = t.isFunction(value);
  if (!invalid) {
    const { confident, computed } = evaluate(value);
    invalid = confident && !!computed && typeof computed !== "string";
  }

  if (invalid) {
    const suggestion = "on" + attr.name[2].toUpperCase() + attr.name.slice(3);
    throw tag.hub.buildError(
      value,
      `The \`${attr.name}\` attribute on a [native tag](https://markojs.com/docs/reference/native-tag) must be a string or a falsey value (\`null\`, \`undefined\`, \`false\`, \`0\`, …). ` +
        `To attach an event listener, use the \`${suggestion}\` [event handler attribute](https://markojs.com/docs/reference/event-handling) instead.`,
      Error,
    );
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

// A `<select>` with a `value` attribute matches options by their `value`
// attributes, so nested options must provide one and cannot use `selected`.
function assertOptionInSelectWithValue(tag: t.NodePath<t.MarkoTag>) {
  let parent: t.NodePath | null = tag.parentPath;
  while (parent) {
    if (parent.isMarkoTag()) {
      if (analyzeTagNameType(parent) === TagNameType.NativeTag) {
        const parentName = getCanonicalTagName(parent);
        if (parentName === "select") {
          if (
            parent.node.attributes.some(
              (attr) =>
                t.isMarkoAttribute(attr) &&
                (attr.name === "value" || attr.name === "valueChange"),
            )
          ) {
            let hasValue = false;
            const attributes = tag.get("attributes");
            for (let i = 0; i < attributes.length; i++) {
              const attr = attributes[i].node;
              if (!t.isMarkoAttribute(attr) || attr.name === "value") {
                hasValue = true;
              } else if (attr.name === "selected") {
                throw attributes[i].buildCodeFrameError(
                  "The `selected` attribute is not supported on an `<option>` within a `<select>` that has a `value` attribute; include the option's `value` in the select's `value` instead.",
                );
              }
            }

            if (!hasValue) {
              throw tag.buildCodeFrameError(
                "An `<option>` within a `<select>` that has a `value` attribute must also have a `value` attribute.",
              );
            }
          }
          return;
        }

        if (parentName !== "optgroup") return;
      } else if (!getTagFacts(parent).controlFlow) {
        return;
      }
    } else if (parent.isProgram()) {
      return;
    }

    parent = parent.parentPath;
  }
}

// The html raw text elements, whose token-rewriting escapers only hold in that
// namespace; other text-only tags use `_escape`, which is per-character.
function getRawTextEscapeHelper(tagName: string) {
  switch (tagName) {
    case "script":
      return "_escape_script" as const;
    case "style":
      return "_escape_style" as const;
  }
}

// Distribute the attr helper through a conditional, serializing literal branches
// at build time: `_attr("a", x ? "b" : dyn)` -> `x ? ' a="b"' : _attr("a", dyn)`.
// A known attribute value's markup, the same in the DOM template and in HTML.
function getStaticAttrMarkup(name: string, computed: unknown) {
  switch (name) {
    case "class":
      return getHTMLRuntime()._attr_class(computed);
    case "style":
      return getHTMLRuntime()._attr_style(computed);
    default:
      return getHTMLRuntime()._attr(name, computed);
  }
}

function buildAttrExpression(name: string, value: t.Expression): t.Expression {
  if (value.type === "ConditionalExpression") {
    return t.conditionalExpression(
      value.test,
      buildAttrExpression(name, value.consequent),
      buildAttrExpression(name, value.alternate),
    );
  }

  const { confident, computed } = evaluate(value);
  if (confident) {
    return t.stringLiteral(getStaticAttrMarkup(name, computed));
  }

  switch (name) {
    case "class":
      return (
        buildStringAttrAnd(name, value) ||
        buildClassAttrExpression(value) ||
        callRuntime("_attr_class", value)
      );
    case "style":
      return (
        buildStringAttrAnd(name, value) || callRuntime("_attr_style", value)
      );
    default:
      return (
        buildLogicalAttr(name, value) ||
        callRuntime("_attr", t.stringLiteral(name), value)
      );
  }
}

// Hoist a shared `name=` prefix out of a conditional's two literal branches so it folds
// into static HTML: `x ? ' class=on' : ' class=off'` -> ` class=${x ? "on" : "off"}`.
function factorAttrConditional(value: t.Expression): t.Expression {
  if (value.type !== "ConditionalExpression") {
    return value;
  }

  const consequent = factorAttrConditional(value.consequent);
  const alternate = factorAttrConditional(value.alternate);
  if (
    consequent.type === "StringLiteral" &&
    alternate.type === "StringLiteral"
  ) {
    const a = consequent.value;
    const b = alternate.value;
    const end = commonAttrPrefixEnd([a, b]);
    if (end) {
      return normalizeStringExpression([
        a.slice(0, end),
        t.conditionalExpression(
          value.test,
          t.stringLiteral(a.slice(end)),
          t.stringLiteral(b.slice(end)),
        ),
      ])!;
    }
  }

  return t.conditionalExpression(value.test, consequent, alternate);
}

// Length of the shared `name=` prefix of serialized attr strings (0 if none).
function commonAttrPrefixEnd(strings: string[]) {
  let prefix = strings[0];
  for (let i = 1; i < strings.length && prefix; i++) {
    const s = strings[i];
    const len = Math.min(prefix.length, s.length);
    let j = 0;
    while (j < len && prefix[j] === s[j]) j++;
    prefix = prefix.slice(0, j);
  }
  return prefix.lastIndexOf("=") + 1;
}

// `x && lit` / `x || lit` / `x ?? lit`: serialize the literal and pass the
// operand to a helper once, e.g. `_attr("a", x && "b")` -> `_attr_and("a", x, ' a="b"')`.
function buildLogicalAttr(name: string, value: t.Expression) {
  if (value.type !== "LogicalExpression") {
    return;
  }

  const { confident, computed } = evaluate(value.right);
  if (!confident) {
    return;
  }

  const attr = getHTMLRuntime()._attr(name, computed);
  const helper =
    value.operator === "&&"
      ? "_attr_and"
      : value.operator === "||"
        ? "_attr_or"
        : "_attr_nullish";
  return callRuntime(
    helper,
    t.stringLiteral(name),
    value.left,
    t.stringLiteral(attr),
  );
}

// class/style omit a falsy value, so `x && val` is just `x ? val : ""` — the
// operand is used once and no helper is needed (unlike `_attr`).
function buildStringAttrAnd(name: "class" | "style", value: t.Expression) {
  if (value.type === "LogicalExpression" && value.operator === "&&") {
    const { confident, computed } = evaluate(value.right);
    if (confident) {
      return t.conditionalExpression(
        value.left,
        t.stringLiteral(getStaticAttrMarkup(name, computed)),
        t.stringLiteral(""),
      );
    }
  }
}

// Resolve a static-base `class` object/array at build time, referencing each toggle once:
// 1 picks a precomputed literal; a few index a hoisted table; more concatenate for `_attr_class`.
const MAX_PRECOMPUTED_CLASS_TOGGLES = 4;
function buildClassAttrExpression(value: t.Expression) {
  if (value.type !== "ObjectExpression" && value.type !== "ArrayExpression") {
    return;
  }

  const meta: DelimitedAttrMeta = {
    staticItems: undefined,
    dynamicItems: undefined,
    dynamicValues: undefined,
  };
  trackDelimitedAttrValue(value, meta);
  if (meta.dynamicItems || !meta.staticItems || !meta.dynamicValues) {
    return;
  }

  const base = toDelimitedString(meta.staticItems, " ", stringifyClassObject);
  if (!base) {
    return;
  }

  const { _attr_class } = getHTMLRuntime();
  const keys = Object.keys(meta.dynamicValues);
  if (keys.length === 1) {
    const [key] = keys;
    return t.conditionalExpression(
      meta.dynamicValues[key],
      t.stringLiteral(_attr_class(base + " " + key)),
      t.stringLiteral(_attr_class(base)),
    );
  }

  if (keys.length <= MAX_PRECOMPUTED_CLASS_TOGGLES) {
    // Each combination's class string, indexed by the toggles bit-packed.
    const combos: string[] = [];
    for (let mask = 0; mask < 1 << keys.length; mask++) {
      let classes = base;
      for (let i = 0; i < keys.length; i++) {
        if (mask & (1 << i)) classes += " " + keys[i];
      }
      combos.push(_attr_class(classes));
    }

    // Hoist the shared `class=` prefix; the table holds only the value parts.
    const end = commonAttrPrefixEnd(combos);
    const table = generateUidIdentifier("class");
    getProgram().node.body.push(
      t.markoScriptlet(
        [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              table,
              t.arrayExpression(
                combos.map((combo) => t.stringLiteral(combo.slice(end))),
              ),
            ),
          ]),
        ],
        true,
      ),
    );

    let index: t.Expression = t.conditionalExpression(
      meta.dynamicValues[keys[0]],
      t.numericLiteral(1),
      t.numericLiteral(0),
    );
    for (let i = 1; i < keys.length; i++) {
      index = t.binaryExpression(
        "+",
        index,
        t.conditionalExpression(
          meta.dynamicValues[keys[i]],
          t.numericLiteral(1 << i),
          t.numericLiteral(0),
        ),
      );
    }

    const lookup = t.memberExpression(t.cloneNode(table), index, true);
    return normalizeStringExpression([combos[0].slice(0, end), lookup])!;
  }

  let classes: t.Expression = t.stringLiteral(base);
  for (const key of keys) {
    classes = t.binaryExpression(
      "+",
      classes,
      t.conditionalExpression(
        meta.dynamicValues[key],
        t.stringLiteral(" " + key),
        t.stringLiteral(""),
      ),
    );
  }

  return callRuntime("_attr_class", classes);
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
      if (
        keyEval.confident &&
        typeof keyEval.computed === "string" &&
        // An empty key falls through to the whole-object helper, which drops
        // it; `classList.toggle("")` would throw.
        !/^$|\s/.test(keyEval.computed)
      ) {
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

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}

/** How a spread claims its controlled attrs during render; nothing for the many
 * tags that control nothing, and nothing when a static attr owns the
 * controllable, since then the spread must leave the slots it wrote alone. */
export function controllableClaimFor(tagName: string | undefined) {
  switch (tagName) {
    case "input":
      return "_controllable_input" as const;
    case "textarea":
      return "_controllable_textarea" as const;
    case "select":
      return "_controllable_select" as const;
    case "details":
    case "dialog":
      return "_controllable_open" as const;
  }
}

/** The resume-pass feature for a tag: `_attrs_script` resolves the control
 * kind at run time, and a run-time tag name can be any of them. */
export function controllableFeatureFor(tagName: string | undefined) {
  switch (tagName) {
    case "input":
      return "controllable-input" as const;
    case "textarea":
      return "controllable-textarea" as const;
    case "select":
      return "controllable-select" as const;
    case "details":
    case "dialog":
      return "controllable-open" as const;
    case undefined:
      return "controllable" as const;
  }
}

export function enableControllable(feature: DOMRuntimeFeature | undefined) {
  if (feature) importRuntimeFeature(feature);
}
