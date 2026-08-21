import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import { isPersisted } from "../util/marko-config";
import {
  boundaryAlwaysPairs,
  inStatefulBranch,
} from "../util/persisted/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  setBindingDownstream,
  trackParamsReferences,
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
import { getSerializeGuard } from "../util/serialize-guard";
import { getSerializeSourcesForExpr } from "../util/serialize-reasons";
import { addSetupStatement } from "../util/setup-statements";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { toFirstExpressionOrBlock } from "../util/to-first-expression-or-block";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const kDOMBinding = Symbol("await tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoArgs(
      tag,
      "Write the promise as a value attribute and receive the result as a tag parameter instead: `<await|result|=promise>`.",
    );
    assertNoSpreadAttrs(tag);
    assertNoAttributeTags(
      tag,
      "For pending and error UI, wrap the `<await>` in a [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) with `<@placeholder>` and `<@catch|err|>` attribute tags.",
    );
    const { node } = tag;
    const tagBody = tag.get("body");
    const section = getOrCreateSection(tag);
    const [valueAttr] = node.attributes;
    const tagExtra = (tag.node.extra ??= {});
    tagExtra[kDOMBinding] = createBinding("#text", BindingType.dom, section);

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) requires a [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      valueAttr.name !== "value"
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (!node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) requires [content](https://markojs.com/docs/reference/language#tag-content).",
        );
    }

    if (
      node.body.params.length &&
      (node.body.params.length > 1 || t.isSpreadElement(node.body.params[0]))
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) only supports a single parameter.",
        );
    }

    const bodySection = startSection(tagBody)!;
    bodySection.isBoundary = true;
    // Page entry must ship the child patcher and branch-resume latch even
    // when this template module does not load (a scriptless persisted await).
    if (isPersisted()) {
      addRuntimeFeatureAsset("patch-boundary");
      // A scriptless construct paints the settled body via text fills.
      addRuntimeFeatureAsset("patch-text");
      // Recorded on every section; `buildShells` keeps only those whose
      // shipped body records a construct can resolve.
      (section.constructSetups ??= []).push({
        binding: tagExtra[kDOMBinding]!,
        body: bodySection,
      });
    }
    const valueExtra = evaluate(valueAttr.value);

    const paramsBinding = trackParamsReferences(tagBody, BindingType.derived);

    if (paramsBinding) {
      setBindingDownstream(paramsBinding, valueExtra);
    }

    bodySection.upstreamExpression = valueAttr.value.extra;

    // The content renderer is initialized unconditionally in setup.
    addSetupStatement(section);

    structure.visit(tag, WalkCode.Replace);
    structure.enterShallow(tag);
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

        setSectionParentIsOwner(bodySection, true);
        // A patch pairs the body scope through a `PatchChild` entry, so the
        // page must ship its patcher (the import rides both outputs).
        if (isPersisted()) {
          importRuntimeFeature("patch-boundary");
        }
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const [valueAttr] = node.attributes;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const tagBody = tag.get("body");
        const section = getSection(tag);
        const bodySection = getSectionForBody(tagBody);
        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const valueSources = getSerializeSourcesForExpr(
          valueAttr.value.extra || {},
        );
        // Client-owned thenables resolve via `_await_promise`; a patch
        // must not Pending them (the body has no fills to Child). Otherwise
        // a constructible await's Pending carries its body content id.
        const patchContent =
          isPersisted() && !valueSources?.param && !valueSources?.global
            ? t.numericLiteral(0)
            : section.constructSetups?.some((s) => s.binding === nodeRef)
              ? t.stringLiteral(getResumeRegisterId(section, nodeRef, "await"))
              : undefined;

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_await",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                valueAttr.value,
                t.arrowFunctionExpression(
                  node.body.params,
                  toFirstExpressionOrBlock(node.body.body),
                ),
                // A persisted page always marks a patchable boundary: a
                // frame pairs its body through the branch link the marker
                // resumes, wherever the boundary renders.
                isPersisted() && !inStatefulBranch(section)
                  ? undefined
                  : getSerializeGuard(
                      section,
                      bodySection?.serializeReason,
                      true,
                    ),
                patchContent,
                // An always-pairing body's Pending entry drops its
                // construct id outside divergent contexts.
                ...(isPersisted() &&
                bodySection &&
                boundaryAlwaysPairs(bodySection)
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
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
        if (isPersisted()) {
          importRuntimeFeature("patch-boundary");
        }
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "await_promise");
        const valueExpr = node.attributes[0].value;

        signal.build = () => {
          const branchRenderArgs = getBranchRendererArgs(bodySection);
          const branchParams = branchRenderArgs.pop();
          const awaitContent = callRuntime(
            "_await_content",
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(branchRenderArgs),
          );
          (signal.prependStatements ||= []).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(bodySection.name),
                // Constructs resolve body content from the frame's shipped
                // record; registering here would bundle html resume elides.
                awaitContent,
              ),
            ]),
          );
          importRuntimeFeature("catch");
          return callRuntime(
            "_await_promise",
            getScopeAccessorLiteral(nodeRef, true),
            branchParams,
          );
        };

        addStatement(
          "render",
          section,
          undefined,
          t.expressionStatement(
            t.callExpression(t.identifier(bodySection.name), [scopeIdentifier]),
          ),
        );

        addValue(
          section,
          valueExpr.extra?.referencedBindings,
          signal,
          valueExpr,
        );

        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description: "Use to consume asynchronous data.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#await",
    },
  ],
  types: runtimeInfo.name + "/tags/await.d.marko",
} as Tag;
