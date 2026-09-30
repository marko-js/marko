import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { getTagName } from "../util/get-tag-name";
import { isPatch } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import { boundaryAlwaysPairs, someBindingRead } from "../util/patch/structure";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import {
  callRuntime,
  importRuntimeFeature,
  linkRuntimeFeature,
} from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import { getScopeReasonStatement } from "../util/serialize-guard";
import {
  addValue,
  getResumeRegisterId,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { translateByTarget } from "../util/visitors";
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
    const tagExtra = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );
    tagExtra.nodeBinding = createBinding("#text", BindingType.dom, section);

    if (!tag.node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) requires [body content](https://markojs.com/docs/reference/language#tag-content).",
        );
    }

    if (!attrTags) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) needs a `<@catch>` to handle errors or a `<@placeholder>` to show while its content is pending. Without either it has no effect, so render its content directly.",
        );
    }

    const bodySection = startSection(tag.get("body"));

    if (bodySection) {
      bodySection.isBoundary = true;
      bodySection.upstreamExpression = tagExtra;
      if (isPatch()) {
        // Any `<try>` a patch may reach (scriptless, or in content one consumer
        // renders stateful) applies its body entry through `patch-try`.
        linkRuntimeFeature("catch");
        linkRuntimeFeature("patch-try");
        if (attrTags?.["@catch"]) linkRuntimeFeature("patch-catch");
      }
      structure.visit(tag, WalkCode.Replace);
      structure.enterShallow(tag);
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);
        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const section = getSection(tag);
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;
        const nodeRef = tag.node.extra!.nodeBinding!;
        const catchTag = getAttrTag(tag, "@catch");
        const placeholderTag = getAttrTag(tag, "@placeholder");
        const catchSection =
          catchTag && getSectionForBody(catchTag.get("body"));
        const placeholderSection =
          placeholderTag && getSectionForBody(placeholderTag.get("body"));

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_try",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                buildContent(tagBody),
                placeholderSection && buildContent(placeholderTag!.get("body")),
                catchTag &&
                  (catchSection
                    ? buildContent(catchTag.get("body"))
                    : t.arrowFunctionExpression([], t.blockStatement([]))),
                placeholderSection &&
                  t.stringLiteral(
                    getResumeRegisterId(placeholderSection, "content"),
                  ),
                catchTag &&
                  t.stringLiteral(
                    catchSection
                      ? getResumeRegisterId(catchSection, "content")
                      : getEmptyCatchId(section, nodeRef),
                  ),
                // A patch pairs the try by its body's shell, which an
                // always-pairing branch drops outside divergent contexts;
                // a try with a catch may rebuild its body from it.
                isPatch() &&
                  t.stringLiteral(getResumeRegisterId(bodySection, "content")),
                isPatch() &&
                  !catchTag &&
                  boundaryAlwaysPairs(bodySection) &&
                  t.numericLiteral(1),
                isPatch() &&
                  !!catchSection?.params &&
                  someBindingRead(catchSection.params, () => true) &&
                  t.numericLiteral(1),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        setSectionParentIsOwner(getSectionForBody(tag.get("body"))!, true);
      },
      exit(tag) {
        const nodeRef = tag.node.extra!.nodeBinding!;
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const catchTag = getAttrTag(tag, "@catch");
        const catchSection =
          catchTag && getSectionForBody(catchTag.get("body"));
        const placeholderTag = getAttrTag(tag, "@placeholder");
        const placeholderSection =
          placeholderTag && getSectionForBody(placeholderTag.get("body"));
        const emptyCatchId =
          catchTag && !catchSection && getEmptyCatchId(section, nodeRef);
        const signal = getSignal(section, nodeRef, "try");

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
            getScopeAccessorLiteral(nodeRef, true),
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

// An empty `@catch` still catches, so it has an empty renderer of its own.
function getEmptyCatchId(section: Section, nodeRef: Binding) {
  return getResumeRegisterId(section, nodeRef, "catch");
}
