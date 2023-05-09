import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import { initValue, queueSource, addValue } from "../util/signals";
import { registerAssignmentReplacer } from "../util/replace-assignments";
import { getSection } from "../util/sections";
import { callRuntime } from "../util/runtime";
import { currentProgramPath } from "../visitors/program";
import { getScopeAccessorLiteral } from "../util/reserve";

export default {
  translate(tag) {
    const { node } = tag;
    const tagVar = node.var;
    const defaultAttr =
      node.attributes.find(
        (attr) =>
          t.isMarkoAttribute(attr) && (attr.default || attr.name === "value")
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
      const binding = tagVar.extra.reserve!;
      const source = initValue(binding);
      const references = defaultAttr.extra?.valueReferences;
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
                  source.identifier.name + "_init"
                );
                currentProgramPath.pushContainer(
                  "body",
                  t.variableDeclaration("const", [
                    t.variableDeclarator(
                      initValueId,
                      callRuntime(
                        "initValue",
                        getScopeAccessorLiteral(binding),
                        source.identifier
                      )
                    ),
                  ])
                );
              }

              return initValueId;
            },
            hasDownstreamIntersections() {
              return source.hasDownstreamIntersections();
            },
          },
          defaultAttr.value
        );
      } else {
        addValue(section, references, source, defaultAttr.value);
      }

      registerAssignmentReplacer(
        tag.scope.getBinding(binding.name)!,
        (assignment, value) =>
          queueSource(source, value, getSection(assignment))
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
} as Tag;
