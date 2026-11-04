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
  coreTagLink,
} from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { isPatch } from "../util/marko-config";
import {
  getUnwrittenBodies,
  getFillSources,
  onReasonsSettled,
} from "../util/patch/decisions";
import { awaitMayRenderClientBranch } from "../util/patch/refresh";
import {
  hasStatefulBranchExpr,
  patchFillsSection,
  patchMayFillSection,
} from "../util/patch/structure";
import {
  alwaysPairs,
  getCallerGroupGuard,
  setBodyEntries,
} from "../util/patch/writers";
import { setDerivedFrom, trackParamsReferences } from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import {
  absentArg,
  callRuntime,
  importRuntimeFeature,
  linkRuntimeFeature,
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
  mayMergeWithText,
  type ControlFlowTagExtra,
  type Section,
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import { findShellId } from "../util/shell";
import {
  addStatement,
  addValue,
  getSignal,
  setSectionOwnerResumedByMarker,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { toOnlyExpressionOrBlock } from "../util/to-only-or-block";
import { translateByTarget } from "../util/visitors";
import { andGuard, getWriteGuard, ifEver } from "../util/write-guard";
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
    const { valueAttr } = assertOnlyValueAttr(tag, true);
    assertHasBody(tag);

    if (
      node.body.params.length &&
      (node.body.params.length > 1 ||
        node.body.params[0].type === "RestElement")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The ${coreTagLink(tag)} only supports a single parameter.`,
        );
    }

    const section = ensureSection(tag);
    const tagExtra = (tag.node.extra ??= {}) as ControlFlowTagExtra;
    const nodeBinding = (tagExtra.nodeBinding = createBinding(
      "#text",
      BindingType.dom,
      section,
    ));

    const bodySection = ensureBodySection(tagBody)!;
    // An await a patch may reach pairs its body through a `PatchChild` entry.
    if (isPatch()) {
      onReasonsSettled(() => {
        if (patchMayFillSection(section)) linkRuntimeFeature("patches/await");
      });
    }
    const valueExtra = (valueAttr.value.extra ??= {});

    const paramsBinding = trackParamsReferences(tagBody, BindingType.derived);

    if (paramsBinding) {
      // The content waits on the promise even when nothing reads its result.
      valueExtra.pure = false;
      setDerivedFrom(paramsBinding, valueExtra);
    }

    tagExtra.textBefore = mayMergeWithText(tag, true);
    initBranchSection(bodySection, valueExtra, {
      kind: "await",
      tag: tagExtra,
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
        const sources = isPatch()
          ? getFillSources(bodySection.branchExpr)
          : undefined;
        // The client settles a promise of its own state, and one a caller passes where
        // no patch fills it: the server's copy renders only the body's holes as data.
        const unfilled =
          isPatch() &&
          (hasStatefulBranchExpr(bodySection)
            ? t.numericLiteral(1)
            : ifEver(
                getCallerGroupGuard(
                  bodySection.parent!,
                  "_unfilled_if",
                  sources,
                ),
              ));
        const unwritten =
          unfilled &&
          getUnwrittenBodies(
            bodySection,
            getCallerParamGroupsAt(sources?.param, bodySection.parent!),
          );
        // Where the copy may not render, its `<await>` writes the body's entries.
        const entries: t.Statement[] | undefined = unwritten ? [] : undefined;
        if (entries) setBodyEntries(bodySection, entries);
        writeHTMLResumeStatements(tag);

        const scopeId = getScopeIdIdentifier(section);
        const accessor = getScopeAccessorLiteral(nodeBinding);
        const content = t.arrowFunctionExpression(
          node.body.params,
          toOnlyExpressionOrBlock(node.body.body),
        );
        // A patch page always marks a patchable boundary: the
        // flush pairs its body through the resumed branch link.
        const markerGuard = patchFillsSection(section)
          ? t.numericLiteral(1)
          : getWriteGuard(section, bodySection.reason, true);
        if (isPatch()) {
          const bodyScopeId = getScopeIdIdentifier(bodySection);
          const awaitCall = callRuntime(
            "_await",
            scopeId,
            accessor,
            valueAttr.value,
            content,
            markerGuard,
            ...getPendingArgs(bodySection, unfilled, unwritten),
          );
          replaceWithStatements(
            tag,
            entries?.length
              ? [
                  t.variableDeclaration("const", [
                    t.variableDeclarator(bodyScopeId, awaitCall),
                  ]),
                  // Where no copy renders, the scope id it returns takes the entries.
                  t.ifStatement(
                    bodyScopeId,
                    t.blockStatement(entries.map(cloneEntry)),
                  ),
                ]
              : [t.expressionStatement(awaitCall)],
          );
        } else {
          replaceWithStatements(tag, [
            t.expressionStatement(
              callRuntime(
                "_await",
                scopeId,
                accessor,
                valueAttr.value,
                content,
                markerGuard,
              ),
            ),
          ]);
        }
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

        addValue(section, valueExpr.extra, signal, valueExpr);

        replaceWithStatements(tag);
      },
    },
  }),
  types: runtimeInfo.name + "/tags/await.d.marko",
} as Tag;

function cloneEntry(entry: t.Statement) {
  return t.cloneNode(entry, true);
}

function getPendingArgs(
  bodySection: Section,
  unfilled: t.Expression | undefined | false,
  unwritten: ReturnType<typeof getUnwrittenBodies> | false | undefined,
): Array<t.Expression | Falsy> {
  const shellId = findShellId(bodySection);
  return [
    shellId && t.stringLiteral(shellId),
    // Where the promise updates from the client, `2`: no render of the body writes a value
    // the client lacks; `3`: only a created one does, writing the body's setup work.
    unwritten
      ? andGuard(unfilled, t.numericLiteral(unwritten === "all" ? 2 : 3))
      : unfilled,
    // An always-pairing body's Pending entry drops its creation id outside
    // structure a flush may create.
    alwaysPairs(bodySection) ? t.numericLiteral(1) : absentArg(0),
    // Pending, its body may yet keep content made before it.
    awaitMayRenderClientBranch(bodySection) && t.numericLiteral(1),
  ];
}
