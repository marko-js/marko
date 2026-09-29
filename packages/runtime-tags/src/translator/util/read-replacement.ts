import { types as t } from "@marko/compiler";

import { localsIdentifier, scopeIdentifier } from "../visitors/program";
import { type Binding, BindingType } from "./bindings";
import { isOptimize, isOutputDOM } from "./marko-config";
import { at, size } from "./optional";
import { isRegisteredFnExtra } from "./references";
import { callRuntime } from "./runtime";
import {
  getLocalsScopeAccessor,
  getScopeAccessorLiteral,
} from "./scope-accessor";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
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

  if (read) {
    const readBinding = read.binding;
    let replacement: t.Expression | undefined;

    if (read.props === undefined) {
      if (read.getter?.invoked) {
        return;
      }

      if (isOutputDOM()) {
        if (read.localFn) {
          // A registered function receives its serialized locals scope; an
          // inline one keeps the lexical reference (following renames).
          if (isRegisteredFnExtra(read.localFn)) {
            return toMemberExpression(
              localsIdentifier,
              getLocalsScopeAccessor(readBinding),
            );
          }
          if (node.type === "Identifier" && node.name !== readBinding.name) {
            node.name = readBinding.name;
          }
          return;
        }
        const inlined = getSignals(extra.section!).get(readBinding)?.inline
          ?.value;
        if (inlined) {
          replacement = t.cloneNode(inlined, true);
        } else if (
          signal?.referencedBindings === readBinding &&
          !signal.hasSideEffect
        ) {
          replacement = getSignalValueIdentifier(signal);
        } else if (read.getter?.hoisted) {
          // Alias getters are never declared on section.bindings.
          replacement = readBinding.upstreamAlias
            ? callRuntime("_hoist_read_error")
            : t.callExpression(
                getBindingGetterIdentifier(readBinding, read.getter.hoisted),
                [getScopeExpression(extra.section!, read.getter.hoisted)],
              );
        } else if (readBinding.type === BindingType.dom) {
          if (read.getter) {
            replacement = t.callExpression(
              getBindingGetterIdentifier(readBinding, readBinding.section),
              [getScopeExpression(extra.section!, readBinding.section)],
            );
          }
        } else if (!isOptimize() && read.ownVar) {
          replacement = callRuntime(
            "_assert_init",
            extra.section
              ? getScopeExpression(extra.section, readBinding.section)
              : scopeIdentifier,
            getScopeAccessorLiteral(readBinding),
          );
        } else {
          replacement = createScopeReadExpression(readBinding, extra.section);
        }
      } else {
        if (node.type !== "Identifier") {
          replacement = t.identifier(readBinding.name);
        } else if (read.getter?.hoisted) {
          replacement = readBinding.upstreamAlias
            ? callRuntime("_hoist_read_error")
            : getBindingGetterIdentifier(readBinding, read.getter.hoisted);
        } else if (readBinding.type === BindingType.dom) {
          if (readBinding.getters.has(readBinding.section)) {
            replacement = getBindingGetterIdentifier(
              readBinding,
              readBinding.section,
            );
          }
        } else if (readBinding.name !== node.name) {
          node.name = readBinding.name;
        }
      }
    } else {
      const { props } = read;
      let remaining = size(props);
      let curNode = node;
      let curBinding: Binding | undefined = readBinding;
      let replaceMember:
        | t.MemberExpression
        | t.OptionalMemberExpression
        | undefined;
      if (isOutputDOM()) {
        if (
          signal?.referencedBindings === readBinding &&
          !signal.hasSideEffect
        ) {
          replacement = getSignalValueIdentifier(signal);
        } else {
          replacement = createScopeReadExpression(readBinding, extra.section);
        }
      } else {
        replacement = t.identifier(readBinding.name);
      }

      while (
        remaining &&
        (curNode.type === "MemberExpression" ||
          curNode.type === "OptionalMemberExpression")
      ) {
        const prop = at(props, --remaining);
        const memberProp = getMemberExpressionPropString(curNode);
        if (memberProp !== prop) break;
        replaceMember = curNode;
        curNode = curNode.object as
          | t.Identifier
          | t.MemberExpression
          | t.OptionalMemberExpression;
      }

      for (let i = 0; i < remaining; i++) {
        const prop = at(props, i)!;
        if (curBinding) {
          curBinding = curBinding.propertyAliases.get(prop);
        }
        replacement = toMemberExpression(
          replacement,
          prop,
          !!curBinding?.nullable,
        );
      }

      if (replaceMember) {
        if (
          readBinding.nullable &&
          replaceMember.object.type !== replacement.type
        ) {
          replaceMember.type = "OptionalMemberExpression";
          replaceMember.optional = true;
        }
        replaceMember.object = withPreviousLocation(
          replacement,
          replaceMember.object,
        );
        replacement = undefined;
      }
    }

    return replacement && withPreviousLocation(replacement, node);
  } else if (
    binding &&
    node.type == "Identifier" &&
    node.name !== binding.name
  ) {
    node.name = binding.name;
  }
}
