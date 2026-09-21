import { types as t } from "@marko/compiler";
import {
  isAttributeTag,
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { isPatch } from "../util/marko-config";
import {
  analyzeAttributeTags,
  getAttrTagPaths,
} from "../util/nested-attribute-tags";
import { boundaryAlwaysPairs } from "../util/patch/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import {
  addRuntimeFeatureAsset,
  callRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  addStatement,
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setTryHasPlaceholder,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../util/translate-attrs";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

const kDOMBinding = Symbol("try tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertNoVar(tag);
      assertNoArgs(tag);
      assertNoParams(tag);
      assertNoAttributes(tag);
      const attrTags = analyzeAttributeTags(tag);
      // The runtime reads only `placeholder` and `catch`, so any other attribute
      // tag (usually a typo) would silently drop its pending/error UI.
      if (attrTags) {
        for (const name in attrTags) {
          if (name !== "@placeholder" && name !== "@catch") {
            const suggestion =
              name[1] === "p" ? "`<@placeholder>`" : "`<@catch>`";
            throw tag.buildCodeFrameError(
              `The [\`<try>\` tag](https://markojs.com/docs/reference/core-tag#try) only supports the \`<@placeholder>\` and \`<@catch>\` attribute tags, but received \`<${name}>\`. Did you mean ${suggestion}?`,
            );
          }
        }
      }
      const section = getOrCreateSection(tag);
      const tagExtra = mergeReferences(
        section,
        tag.node,
        getAllTagReferenceNodes(tag.node),
      );
      tagExtra[kDOMBinding] = createBinding("#text", BindingType.dom, section);

      if (!tag.node.body.body.length) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) requires [body content](https://markojs.com/docs/reference/language#tag-content).",
          );
      }

      const bodySection = startSection(tag.get("body"));

      if (bodySection) {
        bodySection.isBoundary = true;
        bodySection.upstreamExpression = tagExtra;
        if (isPatch()) {
          // Page entry must ship the try's patchers even when this template's
          // dom module never loads (a scriptless `<try>`).
          addRuntimeFeatureAsset("patch-catch");
          addRuntimeFeatureAsset("catch");
        }
        structure.visit(tag, WalkCode.Replace);
        structure.enterShallow(tag);
      }
    },
    exit(tag) {
      // Content without a section (its body never analyzed) cannot be
      // classified as boundary content: fall back to loading the dom module.
      if (!isPatch()) return;
      for (const attrTag of getAttrTagPaths(tag)) {
        if (
          !(
            attrTag.isMarkoTag() &&
            isAttributeTag(attrTag) &&
            attrTag.node.body.extra?.section
          )
        ) {
          getProgram().node.extra.isInteractive = true;
          break;
        }
      }
    },
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);
        if (!bodySection) {
          tag.remove();
          return;
        }

        if (tag.node.extra?.attributeTags?.["@placeholder"]) {
          setTryHasPlaceholder(bodySection, true);
        }

        setSectionParentIsOwner(bodySection, true);
        // A patch pairs the body scope through a `PatchChild` entry, so the
        // page must ship its patcher (the import rides both outputs).
        if (isPatch()) importRuntimeFeature("patch-child");
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const section = getSection(tag);
        const tagExtra = node.extra!;
        const tagBody = tag.get("body");
        const translatedAttrs = translateAttrs(tag);
        const nodeRef = tagExtra[kDOMBinding]!;

        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);
        tag.insertBefore(translatedAttrs.statements);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_try",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                contentProp?.value,
                propsToExpression(translatedAttrs.properties),
                // An always-pairing branch drops its pairing entry's
                // creation payload outside divergent contexts.
                ...(isPatch() &&
                boundaryAlwaysPairs(getSectionForBody(tagBody)!)
                  ? [t.numericLiteral(1)]
                  : []),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        if (tag.node.extra?.attributeTags?.["@placeholder"]) {
          setTryHasPlaceholder(bodySection, true);
        }

        setSectionParentIsOwner(bodySection, true);
        if (isPatch()) importRuntimeFeature("patch-child");
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const referencedBindings = tagExtra.referencedBindings;

        const translatedAttrs = translateAttrs(tag);
        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "try");

        const hasPlaceholder =
          !!tag.node.extra?.attributeTags?.["@placeholder"];
        // A patch delivers a body's throw as the catch's entry.
        const patchesCatch =
          isPatch() && !!tag.node.extra?.attributeTags?.["@catch"];
        signal.build = () => {
          importRuntimeFeature("catch");
          if (hasPlaceholder) importRuntimeFeature("placeholder");
          if (patchesCatch) importRuntimeFeature("patch-catch");
          return callRuntime(
            "_try",
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection),
            ),
          );
        };

        if (translatedAttrs.statements.length) {
          addStatement(
            "render",
            section,
            referencedBindings,
            translatedAttrs.statements,
          );
        }

        addValue(
          section,
          referencedBindings,
          signal,
          propsToExpression(translatedAttrs.properties),
        );

        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description:
        "Used to capture errors and display placeholders for nested content.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#try",
    },
  ],
  types: runtimeInfo.name + "/tags/try.d.marko",
} as Tag;
