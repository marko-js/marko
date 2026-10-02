import { types as t } from "@marko/compiler";

import { localsIdentifier, scopeIdentifier } from "../visitors/program";
import { BindingType } from "./bindings";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputDOM } from "./marko-config";
import { reduce, size } from "./optional";
import { type ExtraRead, isRegisteredFnExtra } from "./references";
import { callRuntime } from "./runtime";
import {
  getLocalsScopeAccessor,
  getScopeAccessorLiteral,
} from "./scope-accessor";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import type { Section } from "./sections";
import {
  getBindingGetterIdentifier,
  getSignals,
  getSignalValueIdentifier,
  type Signal,
} from "./signals";
import {
  getMemberExpressionPropString,
  toMemberExpression,
} from "./to-property-name";
import withPreviousLocation from "./with-previous-location";

export function getReadReplacement(
  node: t.Identifier | t.MemberExpression | t.OptionalMemberExpression,
  signal?: Signal,
) {
  const { extra } = node;
  if (!extra || extra.assignment) return;
  const { read, binding } = extra;

  if (!read) {
    if (binding && node.type === "Identifier" && node.name !== binding.name) {
      node.name = binding.name;
    }
    return;
  }

  if (read.getter?.invoked) return;
  const base = isOutputDOM()
    ? getDOMReadBase(read, extra.section, signal)
    : getHTMLReadBase(node, read);
  if (!base) return;

  const expr = reduce(read.props, addMember, base);
  if (node.type === "Identifier" && expr.type === "Identifier") {
    node.name = expr.name;
    return;
  }

  // HTML's base mirrors the author's chain, so any member of it may match; a
  // DOM base is a scope slot, so only the props read through it can.
  return getChainReplacement(
    node,
    expr,
    isOutputDOM() ? size(read.props) : Infinity,
  );
}

// What a DOM read stands for before its props: a value from its scope.
function getDOMReadBase(
  read: ExtraRead,
  section: Section | undefined,
  signal: Signal | undefined,
) {
  const { binding, props, getter } = read;
  if (read.localFn) {
    // A registered function receives its serialized locals scope; an inline
    // one keeps the lexical reference (following renames).
    return isRegisteredFnExtra(read.localFn)
      ? toMemberExpression(localsIdentifier, getLocalsScopeAccessor(binding))
      : t.identifier(binding.name);
  }

  if (props === undefined) {
    const inlined = getSignals(section!).get(binding)?.inline?.value;
    if (inlined) return t.cloneNode(inlined, true);
  }

  if (signal?.referencedBindings === binding && !signal.hasSideEffect) {
    return getSignalValueIdentifier(signal);
  }

  if (getter?.hoisted) {
    // Alias getters are never declared on section.bindings.
    return binding.aliasOf
      ? callRuntime("_hoist_read_error")
      : t.callExpression(getBindingGetterIdentifier(binding, getter.hoisted), [
          getScopeExpression(section!, getter.hoisted),
        ]);
  }

  if (props === undefined && binding.type === BindingType.dom) {
    return (
      getter &&
      t.callExpression(getBindingGetterIdentifier(binding, binding.section), [
        getScopeExpression(section!, binding.section),
      ])
    );
  }

  if (!isOptimize() && read.ownVar) {
    return callRuntime(
      "_assert_init",
      section ? getScopeExpression(section, binding.section) : scopeIdentifier,
      getScopeAccessorLiteral(binding),
    );
  }

  return createScopeReadExpression(binding, section);
}

// What an HTML read stands for before its props: the expression its binding
// is declared as. HTML runs the author's code in order, so a read rooted at a
// name declared in scope reads as written.
function getHTMLReadBase(
  node: t.Identifier | t.MemberExpression | t.OptionalMemberExpression,
  { binding, getter }: ExtraRead,
) {
  if (getter?.hoisted) {
    return binding.aliasOf
      ? callRuntime("_hoist_read_error")
      : getBindingGetterIdentifier(binding, getter.hoisted);
  }

  if (binding.type === BindingType.dom) {
    return binding.getters.has(binding.section)
      ? getBindingGetterIdentifier(binding, binding.section)
      : undefined;
  }

  let root: t.Node = node;
  while (
    root.type === "MemberExpression" ||
    root.type === "OptionalMemberExpression"
  ) {
    root = root.object;
  }
  const rootBinding = root.extra?.binding;
  if (rootBinding?.declared && !rootBinding.pruned) {
    (root as t.Identifier).name = rootBinding.name;
    return;
  }

  return getDeclaredBindingExpression(binding, true);
}

// A read in place runs only where the author's code would, so it keeps up to
// `depth` outer members as written; one continuing a replaced `?.` stays one.
function getChainReplacement(
  node: t.Identifier | t.MemberExpression | t.OptionalMemberExpression,
  expr: t.Expression,
  depth: number,
) {
  let replaceMember:
    | t.MemberExpression
    | t.OptionalMemberExpression
    | undefined;
  let cur: t.Node = node;
  while (
    depth-- > 0 &&
    (cur.type === "MemberExpression" ||
      cur.type === "OptionalMemberExpression") &&
    (expr.type === "MemberExpression" ||
      expr.type === "OptionalMemberExpression") &&
    getMemberExpressionPropString(cur) === getMemberExpressionPropString(expr)
  ) {
    replaceMember = cur;
    cur = cur.object;
    expr = expr.object as t.Expression;
  }

  if (!replaceMember) return withPreviousLocation(expr, node);
  if (replaceMember.type === "OptionalMemberExpression")
    replaceMember.optional = true;
  replaceMember.object = withPreviousLocation(expr, replaceMember.object);
}

function addMember(expr: t.Expression, prop: string) {
  return toMemberExpression(expr, prop);
}
