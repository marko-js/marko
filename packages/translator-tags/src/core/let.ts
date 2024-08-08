import {
  assertNoArgs,
  assertNoParams,
  computeNode,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { getMarkoOpts, isOutputDOM } from "../util/marko-config";
import { size } from "../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import { getSection } from "../util/sections";
import { addValue, initValue, queueSource } from "../util/signals";
import translateVar from "../util/translate-var";
import { currentProgramPath } from "../visitors/program";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    static?: boolean;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const tagVar = node.var;
    const { optimize } = getMarkoOpts();
    let valueAttr: t.MarkoAttribute | undefined;
    let valueChangeAttr: t.MarkoAttribute | undefined;
    for (const attr of node.attributes) {
      if (t.isMarkoAttribute(attr)) {
        if (attr.name === "value") {
          valueAttr = attr;
        } else if (attr.name === "valueChange") {
          valueChangeAttr = attr;
        } else {
          const start = attr.loc?.start;
          const end = attr.loc?.end;
          const msg =
            "The `let` tag only supports the `value` attribute and its change handler.";

          if (start == null || end == null) {
            throw tag.get("name").buildCodeFrameError(msg);
          } else {
            throw tag.hub.buildError(
              { loc: { start, end } } as unknown as t.Node,
              msg,
              Error,
            );
          }
        }
      }
    }

    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);

    if (!tagVar) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `let` tag requires a tag variable.");
    }

    if (!t.isIdentifier(tagVar)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The `let` cannot be destructured.");
    }

    if (valueChangeAttr && computeNode(valueChangeAttr.value)) {
      throw tag
        .get("attributes")
        .find((attr) => attr.node === valueChangeAttr)!
        .get("value")
        .buildCodeFrameError(
          "The 'let' tag 'valueChange' attribute must be a function.",
        );
    }

    if (valueChangeAttr) {
      const valueChangeReferences = (valueChangeAttr.value.extra ??= {})
        ?.referencedBindings;

      valueChangeAttr.value.extra!.static = t.isFunction(valueChangeAttr.value);

      if (
        optimize &&
        t.isIdentifier(valueChangeAttr.value) &&
        size(valueChangeReferences) === 1
      ) {
        valueChangeAttr.value.extra!.binding = valueChangeReferences as Binding;
      } else {
        valueChangeAttr.value.extra!.binding = createBinding(
          tag.scope.generateUid(tagVar.name + "_change"),
          BindingType.let,
          getSection(tag),
          undefined,
          valueChangeAttr.value.extra,
        );
      }
    }

    const upstreamExpressionExtra = valueAttr
      ? (valueAttr.value.extra ??= {})
      : undefined;

    trackVarReferences(
      tag,
      BindingType.let,
      undefined,
      upstreamExpressionExtra,
      valueChangeAttr?.value.extra?.binding,
    );
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const tagVar = node.var!;
      const { optimize } = getMarkoOpts();
      const valueAttr =
        node.attributes.find(
          (attr) =>
            t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
        ) ?? t.markoAttribute("value", t.identifier("undefined"));
      const valueChangeAttr = node.attributes.find(
        (attr) => t.isMarkoAttribute(attr) && attr.name === "valueChange",
      );
      const valueChangeBinding = valueChangeAttr?.value.extra?.binding;

      if (isOutputDOM()) {
        const section = getSection(tag);
        const binding = tagVar.extra!.binding!;
        const signal = initValue(binding);
        const referencedBindings = valueAttr.value.extra?.referencedBindings;
        const isSetup = !referencedBindings;

        if (
          valueChangeBinding &&
          (!optimize || !t.isIdentifier(valueChangeAttr.value))
        ) {
          const valueChangeSource = initValue(valueChangeBinding);
          if (!optimize && !t.isFunction(valueChangeAttr.value)) {
            const build = valueChangeSource.build;
            valueChangeSource.build = () => {
              const fn = build();
              return callRuntime(
                "changeHandler",
                getScopeAccessorLiteral(valueChangeBinding),
                fn,
              );
            };
          }

          addValue(
            section,
            valueChangeAttr.value.extra?.referencedBindings,
            valueChangeSource,
            valueChangeAttr.value,
          );
        }

        addValue(section, referencedBindings, signal, valueAttr.value);
        if (!isSetup && !valueChangeAttr?.value.extra?.static) {
          let calleeExpression: t.Expression | undefined;
          Object.defineProperty(signal, "callee", {
            get() {
              if (!calleeExpression) {
                const initValueId = tag.scope.generateUidIdentifier(
                  signal.identifier.name + "_init",
                );

                calleeExpression = valueChangeBinding
                  ? t.conditionalExpression(
                      createScopeReadExpression(section, valueChangeBinding),
                      signal.identifier,
                      initValueId,
                    )
                  : initValueId;

                currentProgramPath.pushContainer(
                  "body",
                  t.variableDeclaration("const", [
                    t.variableDeclarator(
                      initValueId,
                      callRuntime(
                        "initValue",
                        getScopeAccessorLiteral(binding),
                        signal.identifier,
                      ),
                    ),
                  ]),
                );
              }
              return calleeExpression;
            },
          });
        }

        signal.buildAssignment = (valueSection, value) => {
          return queueSource(signal, value, valueSection, valueChangeBinding);
        };
      } else {
        translateVar(tag, valueAttr.value);
        if (valueChangeBinding) {
          tag.insertBefore(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(valueChangeBinding.name),
                valueChangeAttr.value,
              ),
            ]),
          );
        }
      }

      tag.remove();
    },
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a mutable binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#let",
    },
  ],
  types: "@marko/translator-tags/tag-types/let.d.marko",
} as Tag;
