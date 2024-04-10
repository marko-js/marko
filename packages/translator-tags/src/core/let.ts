import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import {
  BindingType,
  getScopeAccessorLiteral,
  trackVarReferences,
} from "../util/references";
import { registerAssignmentGenerator } from "../util/replace-assignments";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, initValue, queueSource } from "../util/signals";
import translateVar from "../util/translate-var";
import { currentProgramPath } from "../visitors/program";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const tagVar = node.var;
    const defaultAttr = node.attributes.find(
      (attr) => t.isMarkoAttribute(attr) && attr.name === "value",
    );

    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!tagVar) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'let' tag requires a tag variable.");
    }

    if (!t.isIdentifier(tagVar)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The 'let' cannot be destructured.");
    }

    const upstreamExpressionExtra = defaultAttr
      ? (defaultAttr.value.extra ??= {})
      : undefined;
    trackVarReferences(
      tag,
      BindingType.let,
      undefined,
      upstreamExpressionExtra,
    );
  },
  translate(tag) {
    const { node } = tag;
    const tagVar = node.var!;
    const defaultAttr =
      node.attributes.find(
        (attr) =>
          t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
      ) ?? t.markoAttribute("value", t.identifier("undefined"));

    if (isOutputDOM()) {
      const section = getSection(tag);
      const binding = tagVar.extra!.binding!;
      const signal = initValue(binding);
      const referencedBindings = defaultAttr.value.extra?.referencedBindings;
      const isSetup = !referencedBindings;

      if (!isSetup) {
        let initValueId: t.Identifier | undefined;
        addValue(
          section,
          referencedBindings,
          {
            get identifier() {
              if (!initValueId) {
                initValueId = tag.scope.generateUidIdentifier(
                  signal.identifier.name + "_init",
                );
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

              return initValueId;
            },
            hasDownstreamIntersections() {
              return signal.hasDownstreamIntersections();
            },
          },
          defaultAttr.value,
        );
      } else {
        addValue(section, referencedBindings, signal, defaultAttr.value);
      }

      registerAssignmentGenerator(
        tag.scope.getBinding(binding.name)!,
        (assignment, value) =>
          queueSource(signal, value, getSection(assignment)),
      );
    } else {
      translateVar(tag, defaultAttr.value);
    }

    tag.remove();
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
