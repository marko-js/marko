import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertHasBody,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { isPatch } from "../util/marko-config";
import { patchWrites, patchMayWrite } from "../util/patch/structure";
import { boundaryAlwaysPairs } from "../util/patch/writers";
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
import { scopeIdentifier } from "../util/scope-read";
import {
  getBranchRendererArgs,
  ensureSection,
  ensureBodySection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import { findShellId } from "../util/shell";
import {
  addStatement,
  addValue,
  getSignal,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
import { hasParamOrGlobalSource } from "../util/sources";
import * as structure from "../util/structure";
import { toOnlyExpressionOrBlock } from "../util/to-only-or-block";
import { translateByTarget } from "../util/visitors";
import { getWriteGuard } from "../util/write-guard";
import * as writer from "../util/writer";

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
    const section = ensureSection(tag);
    const valueAttr = assertOnlyValueAttr(tag, true);
    assertHasBody(tag);
    const tagExtra = (tag.node.extra ??= {});
    const nodeBinding = (tagExtra.nodeBinding = createBinding(
      "#text",
      BindingType.dom,
      section,
    ));

    if (
      node.body.params.length &&
      (node.body.params.length > 1 ||
        node.body.params[0].type === "RestElement")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) only supports a single parameter.",
        );
    }

    const bodySection = ensureBodySection(tagBody)!;
    // An await a patch may reach pairs its body through a `PatchChild` entry.
    if (isPatch()) {
      onFinalizeReferences(() => {
        if (patchMayWrite(section)) linkRuntimeFeature("patches/boundary");
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
    addSetupWork(section);

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
        const bodySection = getSectionForBody(tagBody)!;
        writeHTMLResumeStatements(tag);

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
                  toOnlyExpressionOrBlock(node.body.body),
                ),
                // A patch page always marks a patchable boundary: the
                // flush pairs its body through the resumed branch link.
                patchWrites(section)
                  ? t.numericLiteral(1)
                  : getWriteGuard(section, bodySection.reason, true),
                isPatch() && getPendingShellArg(valueAttr.value, bodySection),
                // An always-pairing body's Pending entry drops its
                // creation id outside divergent contexts.
                isPatch() &&
                  boundaryAlwaysPairs(bodySection) &&
                  t.numericLiteral(1),
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
                  ...trimEmptyArgs(branchRenderArgs),
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
          t.callExpression(t.identifier(bodySection.name), [scopeIdentifier]),
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

// A thenable of client state alone resolves via `_await_promise`, so a patch
// skips its Pending entry; any other value's carries the shell id.
function getPendingShellArg(value: t.Expression, bodySection: Section) {
  const valueSources = getSourcesForExpr(value.extra!);
  const shellId = findShellId(bodySection);
  return valueSources?.state && !hasParamOrGlobalSource(valueSources)
    ? t.numericLiteral(0)
    : shellId && t.stringLiteral(shellId);
}
