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
import { isPersisted } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import { recordRegisterIdFootprint } from "../util/preallocate-register-ids";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
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
  getUpdateSiteRegisterId,
  isUpdateBoundarySite,
} from "../util/update-merges";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const hasEnabledCatch = new WeakSet<t.Program>();
const kDOMBinding = Symbol("try tag dom binding");

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

    // The try body renders through branch renderer args like `<await>`
    // (both translate halves mark it parent-owned), so its content key is
    // never requested -- the missing `ownedBody` footprint only makes the
    // analyze enumeration list one unused key, which the tripwire ignores
    // (it checks translate-time requests, not extra enumerations). The
    // @placeholder/@catch attribute-tag bodies compile through
    // `translateAttrs`/`buildContent` and register content ids normally.
    if (isUpdateBoundarySite(tag.node)) {
      recordRegisterIdFootprint(section, {
        kind: "tryPlaceholder",
        binding: tagExtra[kDOMBinding]!,
        bodySection,
      });
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

        // A build-stable id for this try's placeholder boundary (globally
        // unique -- filename + section + accessor), the pending-boundary half
        // of the possession echo: runtime scope ids drift between the document
        // and update renders (matched scopes elide), but this compile constant
        // is identical in both, so a later navigation's echo can tell the
        // server "the client still shows this boundary's placeholder" (see
        // `_have`/`_try` in dom/update.ts and html/writer.ts). Only for a
        // boundary site (`isUpdateBoundarySite`, the same gate as the analyze
        // footprint); the html runtime stashes it on the parent scope only
        // once a document render's placeholder ships (`flushPlaceholder`), so
        // non-persisted output and persisted output with no pending
        // boundaries stay byte-identical.
        const siteId = isUpdateBoundarySite(tag.node)
          ? t.stringLiteral(
              getUpdateSiteRegisterId(
                section,
                "boundary",
                getScopeAccessor(nodeRef),
              ),
            )
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
                siteId,
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

        // Try bodies participate in persisted update renders: the server
        // serializes the parent -> body branch link and the update entry
        // dispatches the body's merge from it. Boundaries always dispatch --
        // even a statically-rendered body may hold awaits that need
        // attaching when the branch was freshly created during an apply.
        if (isPersisted()) {
          addUpdateMerge(section, {
            kind: "branch",
            accessor: getScopeAccessorLiteral(nodeRef),
            bodySection,
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
