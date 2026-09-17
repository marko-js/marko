import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertNoBodyContent,
  assertNoSpreadAttrs,
  assertNoTagVarMutation,
} from "../util/assert";
import { getExprRoot, getFnRoot } from "../util/get-root";
import { isOutputDOM, isPatch } from "../util/marko-config";
import { push } from "../util/optional";
import { getPatchFillKey, isPatchFillBinding } from "../util/patch/refresh";
import {
  BindingType,
  getScopeAccessorLiteral,
  mergeReferences,
  setBindingDownstream,
  setBindingValueExprs,
  trackVarReferences,
  type AssignedBindingExtra,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection } from "../util/sections";
import { addValue, getSignalFn, initValue } from "../util/signals";
import translateVar from "../util/translate-var";
import { traverseFind, skip } from "../util/traverse";

const docsURL = "https://markojs.com/docs/reference/core-tag#action";

export default {
  transform(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    let valueAttr = node.attributes.find(
      (attr): attr is t.MarkoAttribute =>
        t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
    );
    // A value-less act is the identity: `apply(promise)` tracks the promise.
    if (!valueAttr) {
      const value = t.identifier("value");
      valueAttr = t.markoAttribute(
        "value",
        t.arrowFunctionExpression([value], t.cloneNode(value)),
      );
      node.attributes.push(valueAttr);
    }

    const fn = valueAttr.value;
    if (!t.isFunctionExpression(fn) && !t.isArrowFunctionExpression(fn)) {
      throw tag
        .get("attributes")
        .find((attr) => attr.node === valueAttr)!
        .get("value")
        .buildCodeFrameError(
          `The [\`<action>\` tag](${docsURL}) value must be a function written in place, e.g. \`<action/save=async () => { ... }>\`.`,
        );
    }

    // An async body's awaits compile to transaction re-entry: it runs as a
    // generator the act drives, so an assignment after an await still joins
    // the act. A body that reads \`this\`, \`arguments\` or loops with
    // \`for await\` keeps its native awaits.
    (fn.extra ??= {}).action = 0;
    if (fn.async && !keepsNativeAwaits(fn)) {
      const body = t.isBlockStatement(fn.body)
        ? fn.body
        : t.blockStatement([t.returnStatement(fn.body)]);
      awaitsToYields(body);
      valueAttr.value = t.functionExpression(
        t.isFunctionExpression(fn) ? fn.id : null,
        fn.params,
        body,
        true,
      );
      valueAttr.value.extra = { ...fn.extra, action: 1 };
    }
  },
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The [\`<action>\` tag](${docsURL}) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables), e.g. \`<action/save=async () => { ... }>\`.`,
        );
    }

    if (!t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          `The [\`<action>\` tag](${docsURL}) variable cannot be destructured.`,
        );
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The [\`<action>\` tag](${docsURL}) only supports the [\`value=\` attribute](https://markojs.com/docs/reference/language#shorthand-value).`,
        );
    }

    assertNoTagVarMutation(tag);
    const tagSection = getOrCreateSection(tag);
    // State, as a `<let>`: the runtime flips `pending`, which nothing on
    // the server can know, so every read resumes and the value ships.
    const binding = trackVarReferences(tag, BindingType.let)!;
    const tagExtra = mergeReferences(tagSection, tag.node, [valueAttr.value]);
    binding.nullable = false;
    // Written by the runtime (its pending count), never an emitted
    // assignment: rides the value function's own registration, as an
    // assignment inside it would.
    const fnPath = tag.get("attributes.0.value") as t.NodePath<t.Function>;
    const exprRootPath = getExprRoot(fnPath);
    const fnRootPath = getFnRoot(fnPath);
    // Set immediately (not deferred to a finalizer): a real assignment's
    // `binding.assignments` lands during `finalizeReferences`'s own pass,
    // well before any resolved (and memoized) binding sources would read it.
    const idExtra: AssignedBindingExtra = {
      section: tagSection,
      assignment: binding,
      exprRoot: (exprRootPath.node.extra ??= {}),
      fnRoot: fnRootPath?.node.extra as AssignedBindingExtra["fnRoot"],
    };
    binding.assignments = push(binding.assignments, idExtra);
    if (isPatch()) setBindingValueExprs(binding, tagExtra);
    else setBindingDownstream(binding, false);
    // The act is made per scope (its pending count is the instance's), so
    // the body's factory always takes the scope.
    (valueAttr.value.extra as t.FunctionExtra).referencesScope = true;
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      const { value } = valueAttr;

      if (isOutputDOM()) {
        const section = getSection(tag);
        const binding = node.var!.extra!.binding!;
        // An act nothing reads or calls is dead.
        if (binding.pruned) return tag.remove();
        const signal = initValue(binding);
        signal.forcePersist = true;
        signal.build = () =>
          // A flush seeds a scope it creates through the fill registration.
          isPatch() && isPatchFillBinding(binding)
            ? callRuntime(
                "_fill_action",
                t.stringLiteral(getPatchFillKey(binding)),
                getScopeAccessorLiteral(binding, true, true),
                getSignalFn(signal),
              )
            : callRuntime(
                "_action",
                getScopeAccessorLiteral(binding, true, true),
                getSignalFn(signal),
              );
        // The registered body's factory wraps it into the act, which
        // re-runs this signal when its pending state flips. The value
        // re-evaluates with the bindings the body reads (as a `<let>`'s
        // does, keeping them persisted); the signal keeps the first act.
        (value.extra as t.FunctionExtra).actionSignal = signal.identifier;
        addValue(section, tag.node.extra!.referencedBindings, signal, value);
      } else {
        translateVar(tag, callRuntime("_act", value));
      }

      tag.remove();
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to declare a user act: a function whose pending state is reactive and whose draft assignments hold until it settles.",
      descriptionMoreURL: docsURL,
    },
  ],
  types: runtimeInfo.name + "/tags/action.d.marko",
} as Tag;

function keepsNativeAwaits(fn: t.Function) {
  return !!traverseFind(fn.body, (node) => {
    switch (node.type) {
      case "ThisExpression":
        return true;
      case "Identifier":
        return node.name === "arguments";
      case "ForOfStatement":
        return node.await;
      // A nested arrow shares `this` and `arguments`; other functions own theirs.
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ClassMethod":
      case "ObjectMethod":
      case "ClassPrivateMethod":
        return skip;
    }
  });
}

// Rewrites the body's own awaits (not a nested function's) to yields.
function awaitsToYields(node: t.Node) {
  for (const key of (t as any).VISITOR_KEYS[node.type] as string[]) {
    const child = (node as any)[key] as t.Node | t.Node[] | null | undefined;
    if (!child) continue;
    if (Array.isArray(child)) {
      for (let i = 0; i < child.length; i++) {
        child[i] = awaitToYield(child[i]);
      }
    } else {
      (node as any)[key] = awaitToYield(child);
    }
  }
}

function awaitToYield(node: t.Node) {
  if (t.isFunction(node)) return node;
  awaitsToYields(node);
  return t.isAwaitExpression(node) ? t.yieldExpression(node.argument) : node;
}
