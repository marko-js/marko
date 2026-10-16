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
import { setDerivedFrom, trackParamsReferences } from "../util/references";
import { callRuntime, importRuntimeFeature } from "../util/runtime";
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
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import {
  addStatement,
  addValue,
  getSignal,
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
        const bodySection = getSectionForBody(tagBody);
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
                getWriteGuard(section, bodySection?.reason, true),
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
