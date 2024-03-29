import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { getScopeAccessorLiteral } from "../util/references";
import { registerAssignmentGenerator } from "../util/replace-assignments";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, initValue, queueSource } from "../util/signals";
import translateVar from "../util/translate-var";
import { currentProgramPath } from "../visitors/program";

export default {
  translate(tag) {
    const { node } = tag;
    const tagVar = node.var;
    const defaultAttr =
      node.attributes.find(
        (attr) =>
          t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
      ) ?? t.markoAttribute("value", t.identifier("undefined"));

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

    if (isOutputDOM()) {
      const section = getSection(tag);
      const binding = tagVar.extra!.binding!;
      const signal = initValue(binding);
      const references = defaultAttr.value.extra?.referencedBindings;
      const isSetup = !references;

      if (!isSetup) {
        let initValueId: t.Identifier | undefined;
        addValue(
          section,
          references,
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
        addValue(section, references, signal, defaultAttr.value);
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
