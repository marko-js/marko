import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoSpreadAttrs } from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { isPatch } from "../util/marko-config";
import {
  boundaryAlwaysPairs,
  isPatchRendered,
  mayPatchReach,
} from "../util/patch/structure";
import { getSourcesForExpr } from "../util/reasons";
import {
  getReferencedBindings,
  onFinalizeReferences,
  setDerivedFrom,
  trackParamsReferences,
} from "../util/references";
import {
  callRuntime,
  importRuntimeFeature,
  linkRuntimeFeature,
} from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  startSection,
} from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { findShellId } from "../util/shell";
import {
  addStatement,
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { toFirstExpressionOrBlock } from "../util/to-first-expression-or-block";
import { translateByTarget } from "../util/visitors";
import { getWriteGuard } from "../util/write-guard";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

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
    const nodeBinding = (tagExtra.nodeBinding = createBinding(
      "#text",
      BindingType.dom,
      section,
    ));

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
    // An await a patch may reach pairs its body through a `PatchChild` entry.
    if (isPatch()) {
      onFinalizeReferences(() => {
        if (mayPatchReach(section)) linkRuntimeFeature("patch-boundary");
      });
    }
    const valueExtra = (valueAttr.value.extra ??= {});

    const paramsBinding = trackParamsReferences(tagBody, BindingType.derived);

    if (paramsBinding) {
      // The content waits on the promise even when nothing reads its result.
      valueExtra.pure = false;
      setDerivedFrom(paramsBinding, valueExtra);
    }

    initBranchSection(bodySection, valueExtra, {
      nodeBinding,
      optional: false,
      await: true,
    });

    // The content renderer is initialized unconditionally in setup.
    addSetupExpr(section);

    structure.marker(tag, nodeBinding);
    structure.enterShallow(tag);
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const [valueAttr] = node.attributes;
        const tagExtra = node.extra!;
        const nodeBinding = tagExtra.nodeBinding!;
        const tagBody = tag.get("body");
        const section = getSection(tag);
        const bodySection = getSectionForBody(tagBody);
        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        // A thenable of client state alone resolves via `_await_promise`, so a
        // patch skips its Pending entry; any other value's carries the shell id.
        let patchContent: t.Expression | undefined;
        if (isPatch()) {
          const valueSources = getSourcesForExpr(valueAttr.value.extra || {});
          const shellId = bodySection && findShellId(bodySection);
          patchContent =
            valueSources?.state && !valueSources.param && !valueSources.global
              ? t.numericLiteral(0)
              : shellId
                ? t.stringLiteral(shellId)
                : undefined;
        }

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_await",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeBinding),
                valueAttr.value,
                t.arrowFunctionExpression(
                  node.body.params,
                  toFirstExpressionOrBlock(node.body.body),
                ),
                // A patch page always marks a patchable boundary: the
                // flush pairs its body through the resumed branch link.
                isPatchRendered(section)
                  ? t.numericLiteral(1)
                  : getWriteGuard(section, bodySection?.reason, true),
                patchContent,
                // An always-pairing body's Pending entry drops its
                // creation id outside divergent contexts.
                ...(isPatch() && bodySection && boundaryAlwaysPairs(bodySection)
                  ? [t.numericLiteral(1)]
                  : []),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeBinding = tagExtra.nodeBinding!;
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeBinding, "await_promise");
        const valueExpr = node.attributes[0].value;

        signal.build = () => {
          const branchRenderArgs = getBranchRendererArgs(bodySection);
          const branchParams = branchRenderArgs.pop();
          (signal.prependStatements ||= []).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(bodySection.name),
                callRuntime(
                  "_await_content",
                  getScopeAccessorLiteral(nodeBinding, true),
                  ...replaceNullishAndEmptyFunctionsWith0(branchRenderArgs),
                ),
              ),
            ]),
          );
          importRuntimeFeature("catch");
          return callRuntime(
            "_await_promise",
            getScopeAccessorLiteral(nodeBinding, true),
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
          getReferencedBindings(valueExpr.extra),
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
