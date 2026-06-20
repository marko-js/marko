import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
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
  writeHTMLResumeStatements,
} from "../util/signals";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../util/translate-attrs";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const kDOMBinding = Symbol("update-outlet tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

// `<update-outlet>` marks the route-content boundary for the single-page server-first
// update system. It renders its body as a resumable, replaceable branch — reactive
// content inside hydrates correctly in both SSR and CSR, and the branch can be destroyed
// and recreated to swap route content on a navigation. Unlike `<try>` (which it once
// reused) it emits the lean `_outlet` primitive: no catch/placeholder forking and no
// `_enable_catch`, so an app that only uses `<update-outlet>` never pulls the try/await
// machinery into its bundle.
export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
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
          "The `<update-outlet>` tag requires body content.",
        );
    }

    const bodySection = startSection(tag.get("body"));

    if (bodySection) {
      bodySection.upstreamExpression = tagExtra;
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (!getSectionForBody(tag.get("body"))) {
          tag.remove();
          return;
        }

        const bodySection = getSectionForBody(tag.get("body"))!;
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

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);
        tag.insertBefore(translatedAttrs.statements);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_outlet",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                contentProp?.value,
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const bodySection = getSectionForBody(tag.get("body"))!;
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
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "outlet");

        signal.build = () => {
          return callRuntime(
            "_outlet",
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection).slice(0, 3),
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

        // A constant fires the signal exactly once: the outlet always renders its body.
        addValue(section, referencedBindings, signal, t.numericLiteral(0));

        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description:
        "Marks the route-content boundary for single-page server-first updates.",
    },
  ],
  types: runtimeInfo.name + "/tags/update-outlet.d.marko",
} as Tag;
