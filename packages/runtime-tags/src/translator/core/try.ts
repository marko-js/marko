import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertHasBody } from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { getTagName } from "../util/get-tag-name";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import { mergeTagReferences } from "../util/references";
import { callRuntime, importRuntimeFeature } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  startSection,
} from "../util/sections";
import {
  addValue,
  getResumeRegisterId,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { translateByTarget } from "../util/visitors";
import { getScopeReasonStatement } from "../util/write-guard";
import * as writer from "../util/writer";

export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    const attrTags = analyzeAttributeTags(tag);
    // The runtime reads only `placeholder` and `catch`, so any other attribute
    // tag (usually a typo) would silently drop its pending/error UI.
    if (attrTags) {
      for (const name in attrTags) {
        if (name !== "@placeholder" && name !== "@catch") {
          const suggestion =
            name[1] === "p" ? "`<@placeholder>`" : "`<@catch>`";
          throw tag.buildCodeFrameError(
            `The [\`<try>\` tag](https://markojs.com/docs/reference/core-tag#try) only supports the \`<@placeholder>\` and \`<@catch>\` attribute tags, but received \`<${name}>\`. Did you mean ${suggestion}?`,
          );
        }

        // Each is static content of the try, written once, directly inside it.
        const { dynamic, repeated } = attrTags[name];
        if (dynamic || repeated) {
          throw tag
            .get("name")
            .buildCodeFrameError(
              dynamic
                ? `The [\`<try>\` tag](https://markojs.com/docs/reference/core-tag#try) needs its \`<${name}>\` written directly inside it, not within control flow such as \`<if>\` or \`<for>\`.`
                : `The [\`<try>\` tag](https://markojs.com/docs/reference/core-tag#try) takes a single \`<${name}>\`.`,
            );
        }
      }

      for (const child of tag.get("attributeTags")) {
        if (
          child.isMarkoTag() &&
          (child.node.attributes.length || child.node.arguments)
        ) {
          throw child
            .get("name")
            .buildCodeFrameError(
              `The [\`<try>\` tag](https://markojs.com/docs/reference/core-tag#try)'s \`<${getTagName(child)}>\` takes no attributes, only content.`,
            );
        }
      }
    }
    const section = getOrCreateSection(tag);
    const tagExtra = mergeTagReferences(section, tag.node);
    const nodeBinding = (tagExtra.nodeBinding = createBinding(
      "#text",
      BindingType.dom,
      section,
    ));

    assertHasBody(tag);

    if (!attrTags) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) needs a `<@catch>` to handle errors or a `<@placeholder>` to show while its content is pending. Without either it has no effect, so render its content directly.",
        );
    }

    initBranchSection(startSection(tag.get("body"))!, tagExtra, {
      nodeBinding,
      optional: false,
    });
    structure.marker(tag, nodeBinding);
    structure.enterShallow(tag);
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        writer.flushBefore(tag);
      },
      exit(tag) {
        const section = getSection(tag);
        const tagBody = tag.get("body");
        const nodeBinding = tag.node.extra!.nodeBinding!;
        const { catchTag, catchSection, placeholderTag, placeholderSection } =
          getTryParts(tag);

        writeHTMLResumeStatements(tag);

        const tryArgs = [
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(nodeBinding),
          buildContent(tagBody),
          placeholderSection && buildContent(placeholderTag!.get("body")),
          catchTag &&
            (catchSection
              ? buildContent(catchTag.get("body"))
              : t.arrowFunctionExpression([], t.blockStatement([]))),
          placeholderSection &&
            t.stringLiteral(getResumeRegisterId(placeholderSection, "content")),
          catchTag &&
            t.stringLiteral(
              catchSection
                ? getResumeRegisterId(catchSection, "content")
                : getResumeRegisterId(section, nodeBinding, "catch"),
            ),
        ];

        tag
          .replaceWith(
            t.expressionStatement(callRuntime("_try", ...tryArgs)),
          )[0]
          .skip();
      },
    },
    dom: {
      exit(tag) {
        const nodeBinding = tag.node.extra!.nodeBinding!;
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const { catchTag, catchSection, placeholderSection } = getTryParts(tag);
        // An empty `@catch` still catches, so it has an empty renderer of its own.
        const emptyCatchId =
          catchTag &&
          !catchSection &&
          getResumeRegisterId(section, nodeBinding, "catch");
        const signal = getSignal(section, nodeBinding, "try");

        signal.build = () => {
          importRuntimeFeature("catch");
          if (placeholderSection) importRuntimeFeature("placeholder");
          let catchContent: t.Expression | undefined =
            catchSection && t.identifier(catchSection.name);
          if (emptyCatchId) {
            catchContent = t.identifier(`${signal.identifier.name}__catch`);
            (signal.prependStatements ||= []).push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  catchContent,
                  callRuntime("_content", t.stringLiteral(emptyCatchId)),
                ),
              ]),
            );
          }
          const [template, walks, setup] = getBranchRendererArgs(bodySection);
          return callRuntime(
            "_try",
            getScopeAccessorLiteral(nodeBinding, true),
            ...replaceNullishAndEmptyFunctionsWith0([
              template,
              walks,
              setup,
              placeholderSection && t.identifier(placeholderSection.name),
              catchContent,
            ]),
          );
        };

        // Nothing in a try changes, so it renders once, in setup.
        addValue(section, undefined, signal);

        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description:
        "Used to capture errors and display placeholders for nested content.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#try",
    },
  ],
  types: runtimeInfo.name + "/tags/try.d.marko",
} as Tag;

function getTryParts(tag: t.NodePath<t.MarkoTag>) {
  const catchTag = getAttrTag(tag, "@catch");
  const placeholderTag = getAttrTag(tag, "@placeholder");
  return {
    catchTag,
    catchSection: catchTag && getSectionForBody(catchTag.get("body")),
    placeholderTag,
    placeholderSection:
      placeholderTag && getSectionForBody(placeholderTag.get("body")),
  };
}

// An empty `@placeholder` shows nothing, so it is no placeholder; an empty
// `@catch` still catches.
function getAttrTag(tag: t.NodePath<t.MarkoTag>, name: string) {
  for (const child of tag.get("attributeTags")) {
    if (child.isMarkoTag() && getTagName(child) === name) {
      return name === "@catch" || getSectionForBody(child.get("body"))
        ? child
        : undefined;
    }
  }
}

// Static content of the try, rendered by the server as a plain function.
function buildContent(body: t.NodePath<t.MarkoTagBody>) {
  return t.arrowFunctionExpression(
    body.node.params,
    t.blockStatement([
      getScopeReasonStatement(getSectionForBody(body)!),
      ...body.node.body,
    ]),
  );
}
