import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
  getProgram,
} from "@marko/compiler/babel-utils";

import type { Falsy } from "../../common/types";
import { assertHasBody } from "../util/assert";
import { BindingType, createBinding } from "../util/bindings";
import { initBranchSection } from "../util/branch-tag";
import { getTagName } from "../util/get-tag-name";
import { isPatch } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import { onReasonsSettled } from "../util/patch/decisions";
import { patchCreates } from "../util/patch/refresh";
import { patchMayWrite } from "../util/patch/structure";
import { alwaysPairs } from "../util/patch/writers";
import { mergeTagReferences } from "../util/references";
import {
  absentArg,
  callRuntime,
  importRuntimeFeature,
  linkRuntimeFeature,
} from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  getBranchRendererArgs,
  ensureSection,
  ensureBodySection,
  getScopeIdIdentifier,
  getSection,
  type Section,
  getSectionForBody,
} from "../util/sections";
import { createsFromShell } from "../util/shell";
import {
  addValue,
  getResumeRegisterId,
  getSignal,
  trimEmptyArgs,
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
    const section = ensureSection(tag);
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

    initBranchSection(ensureBodySection(tag.get("body"))!, tagExtra, {
      nodeBinding,
      optional: false,
    });
    if (isPatch()) {
      // A `<try>` a patch may reach applies its body through `patches/try`, and
      // a `@catch` a patch creates from its shell, `patches/catch-created`.
      onReasonsSettled(() => {
        if (patchMayWrite(section)) {
          linkRuntimeFeature("patches/try");
          if (attrTags["@catch"]) {
            const { catchSection } = getTryParts(tag);
            linkRuntimeFeature(
              catchSection && patchCreates(catchSection)
                ? "patches/catch-created"
                : "patches/catch",
            );
            // An empty `@catch` renders by the renderer its module registers.
            if (!catchSection)
              getProgram().node.extra.registersBoundaryContent = true;
          }
        }
      });
    }
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
        const bodySection = getSectionForBody(tagBody)!;
        const nodeBinding = tag.node.extra!.nodeBinding!;
        const { catchTag, catchSection, placeholderTag, placeholderSection } =
          getTryParts(tag);

        writeHTMLResumeStatements(tag);

        const tryArgs: Array<t.Expression | Falsy> = [
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(nodeBinding),
          buildContent(tagBody),
          placeholderSection && buildContent(placeholderTag!.get("body")),
          catchTag &&
            (catchSection
              ? buildContent(catchTag.get("body"))
              : t.arrowFunctionExpression([], t.blockStatement([]))),
          placeholderSection
            ? t.stringLiteral(
                getResumeRegisterId(placeholderSection, "content"),
              )
            : isPatch() && absentArg(0),
          catchTag &&
            t.stringLiteral(
              catchSection
                ? getResumeRegisterId(catchSection, "content")
                : getResumeRegisterId(section, nodeBinding, "catch"),
            ),
        ];
        if (isPatch()) {
          // A patch creates from the body's shell; an always-pairing body
          // drops it outside divergent contexts.
          tryArgs.push(
            t.stringLiteral(getResumeRegisterId(bodySection, "content")),
            alwaysPairs(bodySection) ? t.numericLiteral(1) : absentArg(0),
            // A flush creates a catch whose effects its entries mount.
            catchSection && patchCreates(catchSection)
              ? t.numericLiteral(1)
              : absentArg(0),
            getShellContentArg(catchSection, placeholderSection),
          );
        }

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
            ...trimEmptyArgs([
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
    // An empty `@placeholder` shows nothing, so it is no placeholder.
    placeholderSection:
      placeholderTag && getSectionForBody(placeholderTag.get("body")),
  };
}

function getAttrTag(tag: t.NodePath<t.MarkoTag>, name: string) {
  for (const child of tag.get("attributeTags")) {
    if (child.isMarkoTag() && getTagName(child) === name) {
      return child;
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

// The content a patch creates from its shell, as `_try`'s bits: 1 the catch,
// 2 the placeholder.
function getShellContentArg(
  catchSection: Section | undefined,
  placeholderSection: Section | undefined,
) {
  const bits =
    (catchSection && createsFromShell(catchSection) ? 1 : 0) |
    (placeholderSection && createsFromShell(placeholderSection) ? 2 : 0);
  return bits && t.numericLiteral(bits);
}
