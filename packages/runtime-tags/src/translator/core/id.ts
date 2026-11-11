import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertHasVar,
  assertIdentifierVar,
  assertNoBodyContent,
  assertNoTagVarMutation,
  assertOnlyValueAttr,
} from "../util/assert";
import { BindingType } from "../util/bindings";
import evaluate from "../util/evaluate";
import { getAccessorPrefix } from "../util/get-accessor-enums";
import { isOutputHTML } from "../util/marko-config";
import { setDerivedFrom, trackVarReferences } from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getPrefixedScopeAccessor } from "../util/scope-accessor";
import { scopeIdentifier } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addValue, initValue } from "../util/signals";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoAttributeTags(tag);
    assertHasVar(tag);
    assertIdentifierVar(tag);
    const { valueAttr } = assertOnlyValueAttr(tag);

    // Minting is unobservable, so a tag without a value is itself the pure
    // value its variable takes, dropped with it when unread.
    const valueNode = valueAttr ? valueAttr.value : tag.node;
    const valueExtra = valueAttr
      ? (valueAttr.value.extra ??= {})
      : (tag.node.extra ??= {});
    valueExtra.pure = !valueAttr || evaluate(valueAttr.value).pure;
    const binding = trackVarReferences(tag, BindingType.derived);
    if (binding) {
      assertNoTagVarMutation(tag);
      // A truthy `value`, else a minted id string.
      binding.nullable = false;
      setDerivedFrom(binding, valueExtra);
    }

    // The id is initialized in setup unless keyed by the value's references.
    addSetupExpr(ensureSection(tag), valueNode);
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;

      // Nothing reads it and its value was dropped, so there is no id to mint.
      if ((valueAttr ? valueAttr.value : node).extra?.dropped) {
        replaceWithStatements(tag);
        return;
      }

      const id = isOutputHTML()
        ? callRuntime("_id")
        : callRuntime("_id", scopeIdentifier);

      if (isOutputHTML()) {
        replaceWithStatements(tag, [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              node.var!,
              valueAttr ? t.logicalExpression("||", valueAttr.value, id) : id,
            ),
          ]),
        ]);
      } else {
        const section = getSection(tag);
        const signal = initValue(node.var!.extra!.binding!);

        if (valueAttr) {
          const { value } = valueAttr;

          addValue(
            section,
            value.extra,
            signal,
            t.logicalExpression(
              "||",
              value,
              // The fallback memoizes into a prefixed slot on the tag
              // variable's binding, so a nullish value cannot re-mint on
              // every recompute.
              evaluate(value).confident
                ? id
                : callRuntime(
                    "_id",
                    scopeIdentifier,
                    t.stringLiteral(
                      getPrefixedScopeAccessor(
                        node.var!.extra!.binding!,
                        getAccessorPrefix().IdFallback,
                      ),
                    ),
                  ),
            ),
          );
        } else {
          addValue(section, undefined, signal, id);
        }

        replaceWithStatements(tag);
      }
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  types: runtimeInfo.name + "/tags/id.d.marko",
} as Tag;
