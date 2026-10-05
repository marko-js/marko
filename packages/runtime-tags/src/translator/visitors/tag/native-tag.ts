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
  stringifyStyleObject,
  toDelimitedString,
} from "../../../common/helpers";
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
import {
  getStyleImportRead,
  toModuleReadExpression,
} from "../../util/module-read";
import normalizeStringExpression from "../../util/normalize-string-expression";
import { type Opt, push } from "../../util/optional";
import { addReasonExprs, addReason } from "../../util/reasons";
import {
  dropNodes,
  mergeReferenceGroup,
  mergeReferences,
  trackDomVarReferences,
  isTagVarUsed,
  getReferencedBindings,
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
  type StructureNode,
} from "../../util/sections";
import { addSetupExpr } from "../../util/setup-work";
import {
  addHTMLEffectCall,
  addStatement,
  setSectionDebugVar,
} from "../../util/signals";
import { findSlot, getSlot } from "../../util/slots";
import { ALWAYS } from "../../util/sources";
import { createProgramState } from "../../util/state";
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

const kNodeOp = Symbol("native tag structure node");
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
  export interface MarkoTagExtra {
    [kNodeOp]?: StructureNode;
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
            if (
              !isStaticDelimitedAttr(tag, attr) &&
              !evaluate(attr.value).confident
            ) {
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
        (node.var && isTagVarUsed(tag)) ||
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
          addSetupExpr(tagSection);
        }

        if (controllable?.attrs[1] !== undefined) {
          // Controllable change handlers register an effect in setup.
          addSetupExpr(tagSection);
        }

        if (hasEventHandlers || isTagVarUsed(tag)) {
          addReason(getSlot(nodeBinding), ALWAYS);
        }

        trackDomVarReferences(tag, nodeBinding);

        addReasonExprs(getSlot(nodeBinding), push(exprExtras, tagExtra));
      }

      const write = structure.writeTo(tag);
      // Addressed once exit settles it: a child control flow tag may still
      // bind this tag through the only-child optimization.
      tagExtra[kNodeOp] = structure.node(tag);

      write`<${tagName}`;

      if (own) {
        for (const index of own) {
          const { name, value } = attributes[index] as t.MarkoAttribute;
          const { confident, computed } = evaluate(value);
          if (confident) {
            write`${getStaticAttrMarkup(name, computed)}`;
          } else if (name === "class" || name === "style") {
            const meta = trackDelimitedAttrValue(tag, name, value);
            const { staticParts } = meta;
            if (getDelimitedAttrItems(name, meta) && staticParts.length) {
              if (staticParts.every(isLiteralPart)) {
                write`${getStaticAttrMarkup(name, staticParts)}`;
              } else {
                write` class="`;
                for (let i = 0; i < staticParts.length; i++) {
                  const part = staticParts[i];
                  if (i) write` `;
                  if (isLiteralPart(part)) {
                    write`${getHTMLRuntime().escapeDoubleQuotedAttrValue(part)}`;
                  } else {
                    structure.writeModuleReadTo(tag, part);
                  }
                }
                write`"`;
              }
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
      const nodeOp = tagExtra[kNodeOp];
      if (nodeOp) nodeOp.binding = tagExtra.nodeBinding;

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
            const { confident, computed } = evaluate(value);

            if (tagName === "option" && name === "value") {
              write`${callRuntime("_attr_option_value", value)}`;
              continue;
            }

            write`${
              confident
                ? getStaticAttrMarkup(name, computed)
                : factorAttrConditional(buildAttrExpression(tag, name, value))
            }`;
          }
        }

        if (handlers) {
          for (const index of handlers) {
            addHTMLEffectCall(
              tagSection,
              getReferencedBindings(attributes[index].value.extra),
            );
          }
        }

        const isOpenOnly = !!(tagDef && tagDef.parseOptions?.openTagOnly);
        const isTextOnly = getTagFacts(tag).textBody;
        const spreadContent =
          !!spreadExpression &&
          spreadRendersContent(tag, contentAttr, isTextOnly);

        if (spreadExpression) {
          addHTMLEffectCall(tagSection, getReferencedBindings(tagExtra));

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
                  nodeBinding && findSlot(nodeBinding)?.reason,
                  true,
                ),
              ),
            ),
          ];
        } else if (spreadContent) {
          const markerGuard = getWriteGuard(
            tagSection,
            nodeBinding && findSlot(nodeBinding)?.reason,
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
          !skipEndTag && nodeBinding && findSlot(nodeBinding)?.reason;
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
          const referencedBindings = getReferencedBindings(
            attrAt(attributes, controllable.attrs.find(isDefined))!.value.extra,
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
            const { confident } = evaluate(value);
            const valueReferences = getReferencedBindings(value.extra);

            switch (name) {
              case "class":
              case "style": {
                if (!confident) {
                  const meta = trackDelimitedAttrValue(tag, name, value);
                  const items = getDelimitedAttrItems(name, meta);
                  const calls: t.Expression[] = [];
                  const assert = buildClassTogglesAssert(meta);
                  if (assert) calls.push(assert);
                  if (!items) {
                    calls.push(
                      callRuntime(
                        `_attr_${name}`,
                        createScopeReadExpression(nodeBinding),
                        value,
                      ),
                    );
                  } else {
                    const single: { key: string; value: t.Expression }[] = [];
                    for (const { key, value } of items) {
                      if (isLiteralPart(key) && !/\s/.test(key)) {
                        single.push({ key, value });
                      } else {
                        // A style import read or a multi-word key may hold several names.
                        calls.push(
                          callRuntime(
                            "_attr_class_names",
                            createScopeReadExpression(nodeBinding),
                            toClassPartExpression(key),
                            value,
                          ),
                        );
                      }
                    }

                    if (single.length === 1) {
                      calls.push(
                        callRuntime(
                          `_attr_${name}_item`,
                          createScopeReadExpression(nodeBinding),
                          t.stringLiteral(single[0].key),
                          single[0].value,
                        ),
                      );
                    } else if (single.length) {
                      calls.push(
                        callRuntime(
                          `_attr_${name}_items`,
                          createScopeReadExpression(nodeBinding),
                          t.objectExpression(
                            single.map(({ key, value }) =>
                              t.objectProperty(toPropertyName(key), value),
                            ),
                          ),
                        ),
                      );
                    }
                  }

                  for (const call of calls) {
                    addStatement(
                      "render",
                      tagSection,
                      valueReferences,
                      t.expressionStatement(call),
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
              getReferencedBindings(value.extra),
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
              getReferencedBindings(tagExtra),
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
              getReferencedBindings(tagExtra),
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
            getReferencedBindings(tagExtra),
            t.expressionStatement(
              callRuntime("_attrs_script", scopeIdentifier, visitAccessor),
            ),
          );
        }

        if (contentAttr) {
          addStatement(
            "render",
            tagSection,
            getReferencedBindings(contentAttr.value.extra),
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
                getReferencedBindings(textLiteral.extra),
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

// Distribute the attr helper through a conditional, serializing literal branches
// at build time: `_attr("a", x ? "b" : dyn)` -> `x ? ' a="b"' : _attr("a", dyn)`.
function buildAttrExpression(
  tag: t.NodePath<t.MarkoTag>,
  name: string,
  value: t.Expression,
): t.Expression {
  if (value.type === "ConditionalExpression") {
    return t.conditionalExpression(
      value.test,
      buildAttrExpression(tag, name, value.consequent),
      buildAttrExpression(tag, name, value.alternate),
    );
  }

  const { confident, computed } = evaluate(value);
  if (confident) {
    return t.stringLiteral(getStaticAttrMarkup(name, computed));
  }

  switch (name) {
    case "class":
      return (
        buildClassAttrExpression(tag, value) ||
        callRuntime("_attr_class", value)
      );
    case "style":
      return buildStyleAttrAnd(value) || callRuntime("_attr_style", value);
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

// style omits a falsy value, so `x && val` is just `x ? val : ""` — the
// operand is used once and no helper is needed (unlike `_attr`).
function buildStyleAttrAnd(value: t.Expression) {
  if (value.type === "LogicalExpression" && value.operator === "&&") {
    const { confident, computed } = evaluate(value.right);
    if (confident) {
      return t.conditionalExpression(
        value.left,
        t.stringLiteral(getStaticAttrMarkup("style", computed)),
        t.stringLiteral(""),
      );
    }
  }
}

// A `class` of literals, style import reads and toggles without `_attr_class` per render:
// a few toggles index every combination, precomputed or else computed as the module loads.
const MAX_PRECOMPUTED_CLASS_TOGGLES = 4;
function buildClassAttrExpression(
  tag: t.NodePath<t.MarkoTag>,
  value: t.Expression,
) {
  const meta = trackDelimitedAttrValue(tag, "class", value);
  if (meta.dynamic) return;
  const markup = buildClassMarkup(meta);
  const assert = markup && buildClassTogglesAssert(meta);
  return assert ? t.sequenceExpression([assert, markup!]) : markup;
}

function buildClassMarkup({
  staticParts,
  dynamicValues = [],
}: DelimitedAttrMeta) {
  if (dynamicValues.length > MAX_PRECOMPUTED_CLASS_TOGGLES) {
    if (staticParts.length) {
      return callRuntime(
        "_attr_class",
        buildClassString(staticParts, dynamicValues),
      );
    }
    return;
  }

  // Every toggle combination's parts, indexed by the toggles bit-packed.
  const combos: DelimitedAttrPart[][] = [];
  for (let mask = 0; mask < 1 << dynamicValues.length; mask++) {
    const parts = [...staticParts];
    for (let i = 0; i < dynamicValues.length; i++) {
      const { key, alternate } = dynamicValues[i];
      const part = mask & (1 << i) ? key : alternate;
      if (part) parts.push(part);
    }
    combos.push(parts);
  }

  if (combos.every((parts) => parts.every(isLiteralPart))) {
    return buildPrecomputedClass(
      combos.map((parts) => getHTMLRuntime()._attr_class(parts.join(" "))),
      dynamicValues,
    );
  }

  const table = getHoistedClassMarkup(combos);
  return dynamicValues.length
    ? t.memberExpression(table, buildToggleIndex(dynamicValues), true)
    : table;
}

function buildPrecomputedClass(
  combos: string[],
  toggles: DelimitedAttrValue[],
) {
  if (!toggles.length) {
    return t.stringLiteral(combos[0]);
  }

  if (toggles.length === 1) {
    return t.conditionalExpression(
      toggles[0].value,
      t.stringLiteral(combos[1]),
      t.stringLiteral(combos[0]),
    );
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

  const lookup = t.memberExpression(
    t.cloneNode(table),
    buildToggleIndex(toggles),
    true,
  );
  return normalizeStringExpression([combos[0].slice(0, end), lookup])!;
}

// A class with style import reads renders as the module loads: one markup, or a
// table of every toggle combination, shared by each element writing the same parts.
const [getHoistedClassMarkups] = createProgramState(
  () => new Map<string, t.Identifier>(),
);
function getHoistedClassMarkup(combos: DelimitedAttrPart[][]) {
  const key = JSON.stringify(combos);
  const hoisted = getHoistedClassMarkups();
  let id = hoisted.get(key);
  if (!id) {
    const markups = combos.map((parts) =>
      parts.length
        ? callRuntime("_attr_class", buildClassString(parts, []))
        : t.stringLiteral(""),
    );
    hoisted.set(key, (id = generateUidIdentifier("class")));
    getProgram().node.body.push(
      t.markoScriptlet(
        [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              id,
              markups.length === 1 ? markups[0] : t.arrayExpression(markups),
            ),
          ]),
        ],
        true,
      ),
    );
  }
  return t.cloneNode(id);
}

// Debug output checks a toggled style import read against the value's other names.
function buildClassTogglesAssert({
  staticParts,
  dynamicValues,
}: DelimitedAttrMeta) {
  if (
    isOptimize() ||
    !dynamicValues ||
    [
      ...staticParts,
      ...dynamicValues.flatMap(({ key, alternate }) => [key, alternate]),
    ].every((part) => part === undefined || isLiteralPart(part))
  ) {
    return;
  }

  return callRuntime(
    "_assert_class_toggles",
    buildClassString(staticParts, []),
    t.arrayExpression(
      dynamicValues.map(({ key, alternate }) =>
        buildClassString(alternate ? [key, alternate] : [key], []),
      ),
    ),
  );
}

// Each toggle's bit, summed to index its combination.
function buildToggleIndex(toggles: DelimitedAttrValue[]) {
  let index: t.Expression = t.conditionalExpression(
    toggles[0].value,
    t.numericLiteral(1),
    t.numericLiteral(0),
  );
  for (let i = 1; i < toggles.length; i++) {
    index = t.binaryExpression(
      "+",
      index,
      t.conditionalExpression(
        toggles[i].value,
        t.numericLiteral(1 << i),
        t.numericLiteral(0),
      ),
    );
  }
  return index;
}

// The class names of `parts`, then each toggle's while its value is truthy.
function buildClassString(
  parts: DelimitedAttrPart[],
  toggles: DelimitedAttrValue[],
) {
  const strs: (string | t.Expression)[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (i) strs.push(" ");
    strs.push(toClassPartExpression(parts[i]));
  }
  for (const { key, value, alternate } of toggles) {
    strs.push(
      t.conditionalExpression(
        value,
        toSpacedClassPart(key),
        toSpacedClassPart(alternate),
      ),
    );
  }
  return normalizeStringExpression(strs) || t.stringLiteral("");
}

function toClassPartExpression(part: DelimitedAttrPart) {
  return isLiteralPart(part)
    ? t.stringLiteral(part)
    : toModuleReadExpression(part);
}

function toSpacedClassPart(part: DelimitedAttrPart | undefined) {
  return part === undefined
    ? t.stringLiteral("")
    : isLiteralPart(part)
      ? t.stringLiteral(" " + part)
      : t.binaryExpression(
          "+",
          t.stringLiteral(" "),
          toModuleReadExpression(part),
        );
}

// A `class`/`style` value as what writes it: the parts always written, in
// order, and the class names or style properties a value sets.
interface DelimitedAttrMeta {
  /** An item only the whole-value helper (`_attr_class`/`_attr_style`) can write. */
  dynamic: boolean;
  staticParts: DelimitedAttrPart[];
  dynamicValues: DelimitedAttrValue[] | undefined;
}

/** A literal, or a style import read (class only). */
type DelimitedAttrPart = string | string[];

interface DelimitedAttrValue {
  /** The class names the value toggles, or the style property it sets. */
  key: DelimitedAttrPart;
  value: t.Expression;
  /** The class names written instead while the value is falsy (`c ? a : b`). */
  alternate: DelimitedAttrPart | undefined;
}

const delimitedAttrStringify = {
  class: [" ", stringifyClassObject],
  style: [";", stringifyStyleObject],
} as const;

// A toggled class must not share a name with any other part, since the client adds and
// removes it by itself; style import reads' names are checked as they render in dev.
function assertUniqueClassToggles(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
  { staticParts, dynamicValues = [] }: DelimitedAttrMeta,
) {
  const written = new Set(staticParts.flatMap(getClassNames));
  for (const { key, alternate } of dynamicValues) {
    // A toggle writes its key or its alternate, never both.
    const names = new Set([...getClassNames(key), ...getClassNames(alternate)]);
    for (const name of names) {
      if (written.has(name)) {
        throw tag.hub.buildError(
          attr,
          `The toggled class \`${name}\` is also written by another part of the \`class\` value; a toggled [class name](https://markojs.com/docs/reference/native-tag#class) may appear only once.`,
          Error,
        );
      }
    }
    for (const name of names) written.add(name);
  }
}

function getClassNames(part: DelimitedAttrPart | undefined) {
  return part === undefined
    ? []
    : isLiteralPart(part)
      ? part.split(/\s+/).filter(Boolean)
      : [part.join(".")];
}

// A value the template holds whole, which then never needs the element.
function isStaticDelimitedAttr(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
) {
  const { name, value } = attr;
  if (name !== "class" && name !== "style") return false;
  const meta = trackDelimitedAttrValue(tag, name, value);
  if (name === "class") assertUniqueClassToggles(tag, attr, meta);
  return !meta.dynamic && !meta.dynamicValues;
}

// The values the client writes one at a time, leaving the template's static part
// (none when only the whole value can be written); a toggled class repeats no other name.
function getDelimitedAttrItems(
  name: "class" | "style",
  { dynamic, dynamicValues }: DelimitedAttrMeta,
) {
  if (dynamic) return;
  const items: { key: DelimitedAttrPart; value: t.Expression }[] = [];
  if (!dynamicValues) return items;
  const keys = new Set<string>();
  for (const { key, value, alternate } of dynamicValues) {
    if (
      alternate !== undefined ||
      (name === "style" &&
        (!isLiteralPart(key) ||
          /\s/.test(key) ||
          keys.size === keys.add(key).size))
    ) {
      return;
    }
    items.push({ key, value });
  }

  return items;
}

function isLiteralPart(part: DelimitedAttrPart): part is string {
  return typeof part === "string";
}

function trackDelimitedAttrValue(
  tag: t.NodePath<t.MarkoTag>,
  name: "class" | "style",
  value: t.Expression,
) {
  const meta: DelimitedAttrMeta = {
    dynamic: false,
    staticParts: [],
    dynamicValues: undefined,
  };
  trackDelimitedAttrItem(tag, name, value, meta);
  return meta;
}

function trackDelimitedAttrItem(
  tag: t.NodePath<t.MarkoTag>,
  name: "class" | "style",
  item: t.Expression | t.SpreadElement,
  meta: DelimitedAttrMeta,
) {
  switch (item.type) {
    case "ArrayExpression":
      for (const child of item.elements) {
        if (child) trackDelimitedAttrItem(tag, name, child, meta);
      }
      return;
    case "SpreadElement":
      if (item.argument.type === "ArrayExpression") {
        trackDelimitedAttrItem(tag, name, item.argument, meta);
      } else {
        meta.dynamic = true;
      }
      return;
    case "ObjectExpression":
      trackDelimitedAttrObjectProperties(tag, name, item, meta);
      return;
  }

  const part = getDelimitedAttrPart(tag, name, item);
  if (part !== undefined) {
    if (part) meta.staticParts.push(part);
  } else if (name === "class" && item.type === "LogicalExpression") {
    // `c && a` toggles like `{ [a]: c }`: a falsy `c` writes nothing either way.
    const key =
      item.operator === "&&" && getDelimitedAttrPart(tag, name, item.right);
    if (key) {
      addDynamicValue(meta, key, item.left, undefined);
    } else {
      meta.dynamic = true;
    }
  } else if (name === "class" && item.type === "ConditionalExpression") {
    const key = getDelimitedAttrPart(tag, name, item.consequent);
    const alternate = getDelimitedAttrPart(tag, name, item.alternate);
    if (key && alternate !== undefined) {
      addDynamicValue(meta, key, item.test, alternate || undefined);
    } else {
      meta.dynamic = true;
    }
  } else {
    meta.dynamic = true;
  }
}

function trackDelimitedAttrObjectProperties(
  tag: t.NodePath<t.MarkoTag>,
  name: "class" | "style",
  obj: t.ObjectExpression,
  meta: DelimitedAttrMeta,
) {
  for (const prop of obj.properties) {
    const key =
      prop.type === "ObjectProperty"
        ? getDelimitedAttrKey(tag, name, prop)
        : undefined;
    // An empty key writes nothing yet its value still runs.
    if (!key || prop.type !== "ObjectProperty") {
      meta.dynamic = true;
      return;
    }

    const value = prop.value as t.Expression;
    const { confident, computed } = evaluate(value);
    if (!confident) {
      addDynamicValue(meta, key, value, undefined);
    } else if (!isLiteralPart(key)) {
      if (computed) meta.staticParts.push(key);
    } else {
      const part = delimitedAttrStringify[name][1](key, computed);
      if (part) meta.staticParts.push(part);
    }
  }
}

function getDelimitedAttrKey(
  tag: t.NodePath<t.MarkoTag>,
  name: "class" | "style",
  prop: t.ObjectProperty,
): DelimitedAttrPart | undefined {
  if (!prop.computed && prop.key.type === "Identifier") {
    return prop.key.name;
  }

  const key = prop.key as t.Expression;
  const { confident, computed } = evaluate(key);
  if (confident) {
    return typeof computed === "string" || typeof computed === "number"
      ? computed + ""
      : undefined;
  }

  if (name === "class") {
    return getStyleImportRead(tag, key);
  }
}

// A literal's written string (possibly empty), or a style import read (class only).
function getDelimitedAttrPart(
  tag: t.NodePath<t.MarkoTag>,
  name: "class" | "style",
  value: t.Expression,
): DelimitedAttrPart | undefined {
  const { confident, computed } = evaluate(value);
  if (confident) {
    const [delimiter, stringify] = delimitedAttrStringify[name];
    return toDelimitedString(computed, delimiter, stringify);
  }

  if (name === "class") {
    return getStyleImportRead(tag, value);
  }
}

function addDynamicValue(
  meta: DelimitedAttrMeta,
  key: DelimitedAttrPart,
  value: t.Expression,
  alternate: DelimitedAttrPart | undefined,
) {
  (meta.dynamicValues ||= []).push({ key, value, alternate });
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
