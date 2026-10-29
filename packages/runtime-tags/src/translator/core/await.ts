import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import type { Falsy } from "../../common/types";
import {
  assertHasBody,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { isPatch } from "../util/marko-config";
import {
  getUnwrittenBodies,
  getWriteSources,
  onReasonsSettled,
} from "../util/patch/decisions";
import { awaitMayWithhold } from "../util/patch/refresh";
import {
  isStatefulBranch,
  patchWrites,
  patchMayWrite,
} from "../util/patch/structure";
import { alwaysPairs, getCallerGroupGuard } from "../util/patch/writers";
import { setDerivedFrom, trackParamsReferences } from "../util/references";
import {
  absentArg,
  callRuntime,
  importRuntimeFeature,
  linkRuntimeFeature,
  registerRuntimeValue,
} from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import { scopeIdentifier } from "../util/scope-read";
import {
  getBranchRendererArgs,
  getCallerParamGroupsAt,
  ensureSection,
  ensureBodySection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import { findShellId, initsAwaitContent } from "../util/shell";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  setSectionOwnerResumedByMarker,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
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
      onReasonsSettled(() => {
        if (patchMayWrite(bodySection)) linkRuntimeFeature("patches/await");
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
        // `_await` writes the branch marker whenever the body is written, and
        // resume takes the body's owner from it.
        setSectionOwnerResumedByMarker(bodySection);
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
                ...(isPatch() ? getPendingArgs(bodySection) : []),
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
          const content = callRuntime(
            "_await_content",
            getScopeAccessorLiteral(nodeBinding, true),
            ...trimEmptyArgs(branchRenderArgs),
          );
          (signal.prependStatements ||= []).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(bodySection.name),
                initsAwaitContent(bodySection)
                  ? registerRuntimeValue(
                      getResumeRegisterId(section, nodeBinding, "init"),
                      content,
                    )
                  : content,
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

        addValue(section, valueExpr.extra, signal, valueExpr);

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

// A stateful body settles by `_await_promise` alone: its `0` skips the Pending entry.
function getPendingArgs(bodySection: Section): Array<t.Expression | Falsy> {
  if (isStatefulBranch(bodySection)) return [t.numericLiteral(0)];
  const shellId = findShellId(bodySection);
  const sources = getWriteSources(bodySection.branchExpr);
  // Where no patch fills the promise, the client settles the branch it rendered.
  const unfilled = getCallerGroupGuard(
    bodySection.parent!,
    "_unfilled_if",
    sources,
  );
  const unwritten =
    unfilled &&
    getUnwrittenBodies(
      bodySection,
      getCallerParamGroupsAt(sources!.param, bodySection.parent!),
    );
  return [
    shellId && t.stringLiteral(shellId),
    // Where the client owns the promise, `2`: no render of the body writes what the
    // client lacks; `3`: only a created one does, writing the body's setup work.
    unwritten
      ? t.logicalExpression(
          "&&",
          unfilled,
          t.numericLiteral(unwritten === "all" ? 2 : 3),
        )
      : unfilled,
    // An always-pairing body's Pending entry drops its creation id outside
    // divergent contexts.
    alwaysPairs(bodySection) ? t.numericLiteral(1) : absentArg(0),
    // Pending, its body may yet keep content made before it.
    awaitMayWithhold(bodySection) && t.numericLiteral(1),
  ];
}
