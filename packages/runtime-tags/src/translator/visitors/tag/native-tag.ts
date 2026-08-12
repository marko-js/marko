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
import { ControlledType, WalkCode } from "../../../common/types";
import { addAssetImport } from "../../util/asset-imports";
import {
  bodyToRawTextLiteral,
  bodyToTextLiteral,
} from "../../util/body-to-text-literal";
import evaluate from "../../util/evaluate";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-enums";
import { getTagName } from "../../util/get-tag-name";
import { isControlFlowTag } from "../../util/is-core-tag";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import { isTextOnlyNativeTag } from "../../util/is-non-html-text";
import {
  getMarkoOpts,
  isOptimize,
  isOutputHTML,
  isPersisted,
} from "../../util/marko-config";
import normalizeStringExpression from "../../util/normalize-string-expression";
import { includes, type Opt, push } from "../../util/optional";
import { constructRendersReads } from "../../util/persisted/delivery";
import { onFinalizePersisted } from "../../util/persisted/lifecycle";
import {
  ensurePersistedCaptureGroups,
  inClientReselectableStructure,
  isCapturePathSection,
} from "../../util/persisted/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  dropNodes,
  getPrefixedScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  trackDomVarReferences,
} from "../../util/references";
import {
  callRuntime,
  type DOMRuntimeFeature,
  getHTMLRuntime,
  getRuntimePath,
  importRuntime,
  addRuntimeFeatureAsset,
  importRuntimeFeature,
} from "../../util/runtime";
import { createScopeReadExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type StructureVisit,
  type Section,
} from "../../util/sections";
import {
  getPatchWriteOwnership,
  getSerializeGuard,
} from "../../util/serialize-guard";
import {
  addSerializeExpr,
  addSerializeReason,
  getSerializeReason,
  getSerializeSourcesForExpr,
} from "../../util/serialize-reasons";
import { addSetupExpr, addSetupStatement } from "../../util/setup-statements";
import {
  addHTMLEffectCall,
  addStatement,
  setSectionDebugVar,
} from "../../util/signals";
import * as structure from "../../util/structure";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import {
  toMemberExpression,
  toObjectProperty,
  toPropertyName,
} from "../../util/to-property-name";
import { propsToExpression } from "../../util/translate-attrs";
import { type TemplateVisitor, translateByTarget } from "../../util/visitors";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";

export const kNativeTagBinding = Symbol("native tag binding");
export const kSkipEndTag = Symbol("skip native tag mark");
const kTagContentAttr = Symbol("tag could have dynamic content attribute");
const kVisitOp = Symbol("native tag structure visit");

const htmlSelectArgs = new WeakMap<
  t.MarkoTag,
  {
    value: t.Expression;
    valueChange: t.Expression;
    // Spread attrs resume via `_attrs_script`, which reads the controlled type;
    // statically-typed controllables don't, so the type is only serialized then.
    serializeType?: t.Expression;
  }
>();

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNativeTagBinding]?: Binding;
    [kSkipEndTag]?: true;
    [kTagContentAttr]?: true;
    [kVisitOp]?: StructureVisit;
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
      switch (tagName) {
        case "html":
        case "body":
        case "head":
          getProgram().node.extra.page ??= true;
          break;
      }

      if (tagName === "option") {
        assertOptionInSelectWithValue(tag);
      }

      const isTextOnly = isTextOnlyNativeTag(tag);
      const seen: Record<string, t.MarkoAttribute> = Object.create(null);
      const { attributes } = tag.node;
      let injectNonce = isInjectNonceTag(tagName);
      let hasDynamicAttributes = false;
      let hasEventHandlers = false;
      let relatedControllable: RelatedControllable;
      let spreadReferenceNodes: t.Node[] | undefined;
      let exprExtras: Opt<t.NodeExtra>;

      for (let i = attributes.length; i--;) {
        const attr = attributes[i];

        // Codegen drops a `content` attribute when the tag has body content
        // (body wins), so skip it here too — otherwise its value creates a dead
        // scope binding, walk slot, and resume marker for an ignored value.
        if (
          t.isMarkoAttribute(attr) &&
          attr.name === "content" &&
          tag.node.body.body.length
        ) {
          dropNodes(attr.value);
          continue;
        }

        const valueExtra = (attr.value.extra ??= {});

        if (t.isMarkoAttribute(attr)) {
          if (seen[attr.name]) {
            diagnosticWarn(tag, {
              label: `The \`${attr.name}\` attribute is set more than once on \`<${tagName}>\`; only the last value is used.`,
              loc: attr.loc ?? undefined,
            });
            // drop references for duplicated attributes.
            dropNodes(attr.value);
            continue;
          }

          seen[attr.name] = attr;
          assertValidNativeAttrName(tag, attr);
          assertNativeAttrValueType(tag, attr);
          if (attr.name === "style") warnCamelCaseStyleKeys(tag, attr);

          if (injectNonce && attr.name === "nonce") {
            injectNonce = false;
          }

          if (isEventOrChangeHandler(attr.name)) {
            assertNativeHandlerAttr(tag, attr);
          }

          if (isEventHandler(attr.name)) {
            valueExtra.isEffect = true;
            // Attached once and only invoked, so reads inside can be lazy.
            valueExtra.invokeOnly = true;
            hasEventHandlers = true;
          } else {
            assertValidNativeEventHandlerAttr(tag, attr);
            if (!evaluate(attr.value).confident) {
              hasDynamicAttributes = true;
            }
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

      if (seen.content) {
        const tagDef = getTagDef(tag);
        // `<meta content=x>` is a real html attribute, not renderable content.
        if (tagDef?.parseOptions?.openTagOnly && !tagDef.attributes?.content) {
          throw tag.hub.buildError(
            seen.content,
            `The \`<${tagName}>\` tag cannot have content, so it does not support the \`content\` attribute.`,
          );
        }

        if (isTextOnly) {
          throw tag.hub.buildError(
            seen.content,
            `The \`<${tagName}>\` tag takes its content from its body as text, so it does not support the \`content\` attribute.`,
          );
        }
      }

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

      relatedControllable ||= getRelatedControllable(tagName, seen);
      const valueChangeEval =
        tagName === "input" && seen.valueChange
          ? evaluate(seen.valueChange.value)
          : undefined;
      if (
        valueChangeEval &&
        !(valueChangeEval.confident && valueChangeEval.computed == null) &&
        getInputValueMode(seen.type) === "attribute"
      ) {
        const type = evaluate(seen.type!.value).computed as string;
        throw tag.hub.buildError(
          seen.valueChange,
          `\`valueChange\` cannot be used on a \`type="${type}"\` \`<input>\` — user interaction can never change its \`value\`.` +
            (/^[cr]/i.test(type)
              ? " Bind `checked` or `checkedValue` instead."
              : ""),
        );
      }
      if (relatedControllable && relatedControllable.attrs[1]) {
        hasEventHandlers = true;
      }
      // A patched control's entry needs the control patcher plus its
      // kind's helper table on the page — linked as assets, so the
      // template module itself stays unloaded when nothing else needs it.
      if (
        relatedControllable &&
        isPersisted() &&
        isCapturePathSection(getOrCreateSection(tag))
      ) {
        // Handler writes/binds ride the value feat's patchers.
        addRuntimeFeatureAsset(tag.hub.file, "patch-value");
        addRuntimeFeatureAsset(tag.hub.file, "patch-control");
        addRuntimeFeatureAsset(
          tag.hub.file,
          getPatchControlFeature(relatedControllable),
        );
        const controlValue = relatedControllable.attrs[0]?.value;
        if (controlValue) {
          ensurePersistedCaptureGroups(() => controlValue.extra || {});
        }
      }

      if (
        node.var ||
        hasDynamicAttributes ||
        hasEventHandlers ||
        textPlaceholders ||
        injectNonce ||
        // Mirrors `getUsedAttrs`: translate emits `_attr_content` for this.
        (seen.content && tagName !== "meta" && !node.body.body.length) ||
        isDynamicControllable(relatedControllable)
      ) {
        const tagExtra = (node.extra ??= {});
        const tagSection = getOrCreateSection(tag);
        const nodeBinding = (tagExtra[kNativeTagBinding] = createBinding(
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

        if (
          isPersisted() &&
          hasDynamicAttributes &&
          isCapturePathSection(tagSection)
        ) {
          addSerializeReason(tagSection, true, nodeBinding);
          addAssetImport(
            tag.hub.file,
            `${getRuntimePath("dom")}/patch-attr.feat`,
          );
          for (const attr of node.attributes) {
            if (t.isMarkoAttribute(attr) && !isEventHandler(attr.name)) {
              const { value } = attr;
              ensurePersistedCaptureGroups(() => value.extra || {});
            }
          }
          // A patched attr `capturesPatchAttr` rejects as state-fed makes the
          // shell construct unfaithfully; see the placeholder's hole check.
          onFinalizePersisted(() => {
            if (
              !tagSection.isBranch ||
              inClientReselectableStructure(tagSection)
            ) {
              return;
            }
            for (const { name, value } of getUsedAttrs(tagName, node, true)
              .staticAttrs) {
              if (
                isEventHandler(name) ||
                (tagName === "option" && name === "value")
              ) {
                continue;
              }
              const sources = getSerializeSourcesForExpr(value.extra || {});
              if (
                sources?.state &&
                !sources.global &&
                !constructRendersReads(
                  tagSection,
                  value.extra?.referencedBindings as Opt<Binding>,
                )
              ) {
                tagSection.shellBlocked = true;
              }
            }
          });
        }

        if (spreadReferenceNodes) {
          const isMergedSpread = !!relatedControllable;
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
          const spreadExtra = mergeReferences(
            tagSection,
            tag.node,
            spreadReferenceNodes,
          );

          spreadExtra.nativeTagSpread = true;
          // Functions in native tag attrs are only ever invoked (handlers)
          // or stringified from static source, so reads inside can be lazy.
          spreadExtra.invokeOnly = true;
          if (isMergedSpread) {
            spreadExtra.nativeTagSpreadMerged = true;
          }

          let carveProperties = getSpreadControllableValueProps(tagName);
          if (
            !tag.node.body.body.length &&
            !isTextOnly &&
            !getTagDef(tag)?.parseOptions?.openTagOnly &&
            !seen.content
          ) {
            if (carveProperties) {
              carveProperties.push("content");
            } else {
              carveProperties = ["content"];
            }
          }
          for (const node of spreadReferenceNodes) {
            const spreadBinding = node.extra?.spreadFrom;
            if (spreadBinding) {
              spreadBinding.noSerialize = true;
              if (carveProperties) {
                for (const property of carveProperties) {
                  if (
                    !includes(spreadBinding.noSerializeProperties, property)
                  ) {
                    spreadBinding.noSerializeProperties = push(
                      spreadBinding.noSerializeProperties,
                      property,
                    );
                  }
                }
              }
            }
          }
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
          addSetupExpr(tagSection, textPlaceholders[0]);
        }

        if (injectNonce) {
          // A nonce statement with no references is written in setup.
          addSetupStatement(tagSection);
        }

        if (relatedControllable?.attrs[1]) {
          // Controllable change handlers register an effect in setup.
          addSetupStatement(tagSection);
        }

        for (const name in seen) {
          const attr = seen[name];
          if (
            isEventHandler(name) ||
            name === "content" ||
            !evaluate(attr.value).confident
          ) {
            addSetupExpr(tagSection, attr.value);
          }
        }

        addSerializeExpr(
          tagSection,
          !!(node.var || hasEventHandlers),
          nodeBinding,
        );

        trackDomVarReferences(tag, nodeBinding);

        addSerializeExpr(tagSection, push(exprExtras, tagExtra), nodeBinding);
      }

      const write = structure.writeTo(tag);
      // Unclaimed until exit: a child control flow tag may still bind this tag
      // through the only-child optimization.
      (node.extra ??= {})[kVisitOp] = structure.visit(tag, WalkCode.Get, false);

      write`<${tagName}`;

      for (const attr of getUsedAttrs(tagName, tag.node, true).staticAttrs) {
        const { name, value } = attr;
        const { confident, computed } = value.extra || {};

        switch (name) {
          case "class":
          case "style": {
            const helper = `_attr_${name}` as const;
            if (confident) {
              write`${getHTMLRuntime()[helper](computed)}`;
            } else {
              const meta: DelimitedAttrMeta = {
                staticItems: undefined,
                dynamicItems: undefined,
                dynamicValues: undefined,
              };
              trackDelimitedAttrValue(value, meta);
              if (!meta.dynamicItems && meta.staticItems) {
                write`${getHTMLRuntime()[helper](meta.staticItems)}`;
              }
            }
            break;
          }
          default:
            if (confident) {
              write`${getHTMLRuntime()._attr(name, computed)}`;
            }
            break;
        }
      }

      write`>`;
      structure.enter(tag);
    },
    exit(tag) {
      const tagName = getCanonicalTagName(tag);
      const tagExtra = tag.node.extra!;
      const visitOp = tagExtra[kVisitOp];
      if (visitOp) visitOp.claimed = !!tagExtra[kNativeTagBinding];

      if (!getTagDef(tag)?.parseOptions?.openTagOnly) {
        const write = structure.writeTo(tag);
        if (tagName !== "textarea" && isTextOnlyNativeTag(tag)) {
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
        const nodeBinding = tagExtra[kNativeTagBinding];
        const tagDef = getTagDef(tag);
        const write = writer.writeTo(tag);
        const tagSection = getSection(tag);
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

        const usedAttrs = getUsedAttrs(tagName, tag.node);
        const {
          staticAttrs,
          staticControllable,
          staticContentAttr,
          skipExpression,
          injectNonce,
        } = usedAttrs;
        let { spreadExpression } = usedAttrs;

        // Name the change-handler slot after the attribute the author wrote;
        // other internal slots get generic serializer descriptions instead.
        if (!isOptimize() && nodeBinding) {
          const changeAttr = staticControllable?.attrs[1];
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
            // A lone spread is unambiguous provenance; with several, a merged
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
        if (tagName === "select" && (staticControllable || spreadExpression)) {
          writer.flushBefore(tag);
        }

        write`<${tagName}`;

        if (injectNonce) {
          write`${callRuntime("_attr_nonce")}`;
        }

        if (staticControllable) {
          const hasChangeHandler = !!staticControllable.attrs[1];
          if (tagName !== "select" && tagName !== "textarea") {
            write`${callRuntime(
              staticControllable.helper,
              getScopeIdIdentifier(tagSection),
              visitAccessor,
              ...staticControllable.attrs.map((attr) => attr?.value),
            )}`;
          }

          if (hasChangeHandler) {
            addHTMLEffectCall(tagSection, undefined);
          }

          // A patched control wires like a fill: the handler installs first
          // (binds queue ahead of the control's apply), then the value entry
          // makes the server's value authoritative through the registered
          // controlled helper — paired refresh and construct alike.
          if (isPersisted() && isCapturePathSection(tagSection)) {
            const [valueAttr, changeAttr] = staticControllable.attrs;
            if (changeAttr) {
              // A param-fed handler binds only under server ownership, so
              // a client-owned control never rebinds a stale handler.
              write`${callRuntime(
                "_patch_bind",
                getScopeIdIdentifier(tagSection),
                t.stringLiteral(
                  getPrefixedScopeAccessor(
                    nodeBinding!,
                    getAccessorPrefix().ControlledHandler,
                  ),
                ),
                t.cloneNode(changeAttr.value, true),
                ...getPatchWriteOwnership(
                  getSerializeSourcesForExpr(changeAttr.value.extra || {}),
                ),
              )}`;
            }
            // A param-fed control value writes only under server ownership.
            write`${callRuntime(
              "_patch_control",
              getScopeIdIdentifier(tagSection),
              t.cloneNode(visitAccessor!, true),
              t.numericLiteral(getControlledType(staticControllable)),
              valueAttr ? t.cloneNode(valueAttr.value, true) : buildUndefined(),
              ...(valueAttr
                ? getPatchWriteOwnership(
                    getSerializeSourcesForExpr(valueAttr.value.extra || {}),
                  )
                : []),
            )}`;
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
              serializeType: t.numericLiteral(1),
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
              getScopeIdIdentifier(tagSection),
              visitAccessor,
              value,
              valueChange,
              // Spread attrs resume via `_attrs_script`, which reads the
              // controlled type; statically-typed controllables don't.
              staticControllable ? undefined : t.numericLiteral(1),
            );
          } else if (value) {
            writeAtStartOfBody = callRuntime("_textarea_value", value);
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
                // The capture renders the attribute itself (expression
                // appears once); ownership rides as trailing args.
                if (capturesPatchAttr(tag, tagSection, name, value)) {
                  write`${callRuntime(
                    `_patch_attr_${name as "class" | "style"}`,
                    getScopeIdIdentifier(tagSection),
                    getScopeAccessorLiteral(nodeBinding!),
                    value,
                    ...getPatchWriteOwnership(
                      getSerializeSourcesForExpr(value.extra || {}),
                    ),
                  )}`;
                  break;
                }
                write`${factorAttrConditional(
                  buildAttrExpression(
                    value,
                    (branch) => {
                      const { confident, computed } = evaluate(branch);
                      return confident
                        ? getHTMLRuntime()[helper](computed)
                        : undefined;
                    },
                    (branch) =>
                      buildStringAttrAnd(helper, branch) ||
                      (name === "class" && buildClassAttrExpression(branch)) ||
                      callRuntime(helper, branch),
                  ),
                )}`;
              }
              break;
            }
            default:
              if (confident) {
                write`${getHTMLRuntime()._attr(name, computed)}`;
              } else if (isEventHandler(name)) {
                addHTMLEffectCall(tagSection, valueReferences);
              } else {
                // The capture renders the attribute itself (expression
                // appears once); ownership rides as trailing args.
                if (capturesPatchAttr(tag, tagSection, name, value)) {
                  write`${callRuntime(
                    "_patch_attr",
                    getScopeIdIdentifier(tagSection),
                    getScopeAccessorLiteral(nodeBinding!),
                    t.stringLiteral(name),
                    value,
                    ...getPatchWriteOwnership(
                      getSerializeSourcesForExpr(value.extra || {}),
                    ),
                  )}`;
                  break;
                }
                write`${factorAttrConditional(
                  buildAttrExpression(
                    value,
                    (branch) => {
                      const { confident, computed } = evaluate(branch);
                      return confident
                        ? getHTMLRuntime()._attr(name, computed)
                        : undefined;
                    },
                    (branch) =>
                      buildLogicalAttr(name, branch) ||
                      callRuntime("_attr", t.stringLiteral(name), branch),
                  ),
                )}`;
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

        if (isOpenOnly || isTextOnly) {
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
          // `</html>` defers even when marked (its `#html/0` marker resolves to
          // the root); `</body>` can't — its marker resolves positionally.
          tagName === "html" || (!markerSerializeReason && tagName === "body"),
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
                getScopeIdIdentifier(tagSection),
                nodeBinding && getScopeAccessorLiteral(nodeBinding),
                selectArgs.value,
                selectArgs.valueChange,
                t.arrowFunctionExpression(
                  [],
                  t.blockStatement(tag.node.body.body),
                ),
                selectArgs.serializeType,
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

        if (!tagExtra[kSkipEndTag] && !isOpenOnly && !selectArgs) {
          if (tagName === "head" && getMarkoOpts().linkAssets) {
            write`${callRuntime("_flush_head")}`;
          }
          write`</${tagName}>`;
        }

        if (markerSerializeReason) {
          writer.markNode(
            tag,
            nodeBinding,
            markerSerializeReason,
            tagName === "html",
          );
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
        const tagSection = getSection(tag);
        const visitAccessor =
          nodeBinding && getScopeAccessorLiteral(nodeBinding);

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
            true,
          );
        }

        if (staticControllable) {
          const hasChangeHandler = !!staticControllable.attrs[1];
          const defaultHelper =
            getDOMControllableDefaultHelper(staticControllable);
          const firstAttr = staticControllable.attrs.find(Boolean)!;
          const referencedBindings = firstAttr.value.extra?.referencedBindings;
          const values = (
            hasChangeHandler
              ? staticControllable.attrs
              : staticControllable.attrs.toSpliced(1, 1)
          ).map((attr) => attr?.value);
          if (
            hasChangeHandler &&
            defaultHelper !== `${staticControllable.helper}_default`
          ) {
            values.push(importRuntime(defaultHelper));
          }

          addStatement(
            "render",
            tagSection,
            referencedBindings,
            t.expressionStatement(
              callRuntime(
                hasChangeHandler ? staticControllable.helper : defaultHelper,
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
                callRuntime(
                  `${staticControllable.helper}_script`,
                  scopeIdentifier,
                  visitAccessor,
                ),
              ),
            );
          }

          // An interactive page receives features through its dom module,
          // so the imports ride here beside the analyze-phase assets.
          if (isPersisted() && isCapturePathSection(tagSection)) {
            importRuntimeFeature("patch-value");
            importRuntimeFeature("patch-control");
            importRuntimeFeature(getPatchControlFeature(staticControllable));
          }
        }

        for (const attr of staticAttrs) {
          const { name, value } = attr;
          const { confident } = value.extra || {};
          const valueReferences = value.extra?.referencedBindings;

          switch (name) {
            case "class":
            case "style": {
              const helper = `_attr_${name}` as const;
              if (!confident) {
                // The dom compile shares the capture gating (errors must
                // match html) and imports the feature the capture applies.
                if (capturesPatchAttr(tag, tagSection, name, value)) {
                  importRuntimeFeature("patch-attr");
                }
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
                if (capturesPatchAttr(tag, tagSection, name, value)) {
                  importRuntimeFeature("patch-attr");
                }
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
          const name = tag.get("name");
          const staticName = name.isStringLiteral()
            ? name.node.value
            : undefined;
          const controllable =
            !staticControllable && controllableClaimFor(staticName);
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
                  controllable && importRuntime(controllable),
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
                  controllable && importRuntime(controllable),
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
            true,
          );
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const nodeBinding = tagExtra[kNativeTagBinding];
        const openTagOnly = getTagDef(tag)?.parseOptions?.openTagOnly;
        const tagName = getCanonicalTagName(tag);

        if (!openTagOnly) {
          if (tagName !== "textarea" && isTextOnlyNativeTag(tag)) {
            const textLiteral = bodyToTextLiteral(tag.node.body);
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

type RelatedControllable = ReturnType<typeof getRelatedControllable>;
// A state-fed attribute recomputes client-side, and inside client-owned
// structure delivery is owner fills: neither captures.
function capturesPatchAttr(
  tag: t.NodePath<t.MarkoTag>,
  tagSection: Section,
  name: string,
  value: t.Expression,
) {
  if (
    !(isPersisted() && isCapturePathSection(tagSection)) ||
    inClientReselectableStructure(tagSection)
  ) {
    return false;
  }
  const attrSources = getSerializeSourcesForExpr(value.extra || {});
  if (!attrSources?.state) return true;
  if (attrSources.global) {
    throw tag.buildCodeFrameError(
      `Persisted templates do not yet support \`$global\` contributions to stateful expressions (\`${name}\` attribute).`,
    );
  }
  return false;
}

export function getRelatedControllable(
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
        // One-way `value=` is default-value semantics on purpose (updates what
        // `form.reset()` restores), not a missing-change-handler mistake.
        const valueMode = getInputValueMode(attrs.type);
        if (valueMode === "attribute" && !attrs.valueChange) {
          break;
        }

        return {
          special: false,
          helper: "_attr_input_value",
          attrs: [attrs.value, attrs.valueChange],
          valueMode,
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

function getPatchControlFeature(
  controllable: NonNullable<RelatedControllable>,
) {
  return controllable.helper === "_attr_select_value"
    ? ("patch-control-select" as const)
    : controllable.helper.endsWith("_open")
      ? ("patch-control-open" as const)
      : ("patch-control-input" as const);
}

// The wire's control kind ids mirror `ControlledType`.
function getControlledType(controllable: NonNullable<RelatedControllable>) {
  switch (controllable.helper) {
    case "_attr_input_checked":
      return ControlledType.InputChecked;
    case "_attr_select_value":
      return ControlledType.SelectValue;
    case "_attr_input_value":
    case "_attr_textarea_value":
      return ControlledType.InputValue;
    default:
      return ControlledType.DetailsOrDialogOpen;
  }
}

function getDOMControllableDefaultHelper(
  controllable: NonNullable<RelatedControllable>,
) {
  return controllable.helper === "_attr_input_value" && controllable.valueMode
    ? (`_attr_input_value_${controllable.valueMode}_default` as const)
    : (`${controllable.helper}_default` as const);
}

// `staticOnly` skips building the spread expression (analyze records only the
// static attrs, and the nonce prop reads translate-phase identifiers).
function getUsedAttrs(tagName: string, tag: t.MarkoTag, staticOnly?: boolean) {
  const seen: Record<string, t.MarkoAttribute> = Object.create(null);
  const { attributes } = tag;
  const maybeStaticAttrs = new Set<t.MarkoAttribute>();
  const skipProps = new Set<string>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let staticControllable: RelatedControllable;
  let staticContentAttr: undefined | t.MarkoAttribute;
  let injectNonce = isInjectNonceTag(tagName);
  for (let i = attributes.length; i--;) {
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
    if (!isDynamicControllable(staticControllable)) {
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

  if (staticOnly) {
    // Analyze reads only the static attrs; skip building the spread AST.
    return {
      injectNonce,
      staticAttrs,
      staticContentAttr,
      staticControllable,
      spreadExpression,
      skipExpression,
    };
  }

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
      } else if (!isControlFlowTag(parent)) {
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
function buildAttrExpression(
  value: t.Expression,
  serialize: (value: t.Expression) => string | undefined,
  dynamic: (value: t.Expression) => t.Expression,
): t.Expression {
  if (value.type === "ConditionalExpression") {
    return t.conditionalExpression(
      value.test,
      buildAttrExpression(value.consequent, serialize, dynamic),
      buildAttrExpression(value.alternate, serialize, dynamic),
    );
  }

  const serialized = serialize(value);
  return serialized === undefined
    ? dynamic(value)
    : t.stringLiteral(serialized);
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
function buildStringAttrAnd(
  helper: "_attr_class" | "_attr_style",
  value: t.Expression,
) {
  if (value.type === "LogicalExpression" && value.operator === "&&") {
    const { confident, computed } = evaluate(value.right);
    if (confident) {
      return t.conditionalExpression(
        value.left,
        t.stringLiteral(getHTMLRuntime()[helper](computed)),
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

function isDynamicControllable(controllable: RelatedControllable) {
  // An otherwise controllable attr is a plain attribute when it is not "special",
  // has no change handler, and can never update (no referenced bindings).
  if (controllable) {
    return (
      controllable.special ||
      !!(
        controllable.attrs[1] ||
        controllable.attrs.find(Boolean)!.value!.extra?.referencedBindings
      )
    );
  }

  return false;
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
