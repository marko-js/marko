import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { getTagName } from "../util/get-tag-name";
import { isPersisted } from "../util/marko-config";
import {
  analyzeAttributeTags,
  getAttrTagPaths,
} from "../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  onFinalizeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
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
  getResumeRegisterId,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setTryHasPlaceholder,
  writeHTMLResumeStatements,
} from "../util/signals";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../util/translate-attrs";
import {
  addUpdateMerge,
  getUpdateAnchorRegisterId,
  isUpdateBoundaryAnchor,
} from "../util/update-merges";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const hasEnabledCatch = new WeakSet<t.Program>();
const kDOMBinding = Symbol("try tag dom binding");

function getPlaceholderSection(tag: t.NodePath<t.MarkoTag>) {
  for (const child of getAttrTagPaths(tag)) {
    if (child.isMarkoTag() && getTagName(child) === "@placeholder") {
      return getSectionForBody(child.get("body"));
    }
  }
}

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    analyzeAttributeTags(tag);
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
      bodySection.upstreamExpression = tagExtra;
    }

    if (isUpdateBoundaryAnchor(tag.node)) {
      onFinalizeReferences(() =>
        getUpdateAnchorRegisterId(
          section,
          "boundary",
          getScopeAccessor(tagExtra[kDOMBinding]!),
        ),
      );
    }
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

        // Pending boundaries need a build-stable id across document and patch
        // scope allocation.
        const anchorId = isUpdateBoundaryAnchor(tag.node)
          ? t.stringLiteral(
              getUpdateAnchorRegisterId(
                section,
                "boundary",
                getScopeAccessor(nodeRef),
              ),
            )
          : undefined;
        const bodySection = getSectionForBody(tagBody);
        // The construct id keys the body section's wire shell so a boundary
        // under a constructed parent builds client-side from template/walks.
        const bodyId =
          isPersisted() && bodySection
            ? t.stringLiteral(getResumeRegisterId(bodySection, "update"))
            : undefined;

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_try",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                contentProp?.value,
                propsToExpression(translatedAttrs.properties),
                bodyId && !anchorId ? t.numericLiteral(0) : anchorId,
                bodyId,
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

        walks.visit(tag, WalkCode.Replace);
        walks.enterShallow(tag);
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const referencedBindings = tagExtra.referencedBindings;
        const placeholderSection = getPlaceholderSection(tag);

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

        if (isPersisted()) {
          addUpdateMerge(section, {
            kind: "branch",
            accessor: getScopeAccessorLiteral(nodeRef),
            bodySection,
            placeholderSection,
          });
        }

        signal.build = () => {
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

        const program = getProgram().node;
        if (!hasEnabledCatch.has(program)) {
          hasEnabledCatch.add(program);
          program.body.push(
            t.expressionStatement(callRuntime("_enable_catch")),
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
