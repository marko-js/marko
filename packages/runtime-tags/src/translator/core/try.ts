import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import {
  analyzeAttributeTags,
  getAttrTagPaths,
} from "../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
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
import {
  addStatement,
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setTryHasPlaceholder,
  writeHTMLResumeStatements,
} from "../util/signals";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../util/translate-attrs";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const hasEnabledCatch = new WeakSet<t.Program>();
const kDOMBinding = Symbol("try tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

// A try can go pending or throw on the *client* only when its body subtree is
// async (an `<await>` — including one inside a child component — may
// resolve/reject via streaming after hydration), interactive (an effect could
// throw), or otherwise runs client code that could throw during a (re-)render.
// A body that renders to fully static markup with no client signals can only
// ever catch/pend on the server.
function bodyCanThrowOrPendOnClient(bodySection: Section) {
  return (
    bodySection.isAsync ||
    bodySection.isInteractive ||
    !!bodySection.bindings ||
    !!bodySection.referencedClosures ||
    !!bodySection.referencedLocalClosures ||
    !!bodySection.serializeReason ||
    bodySection.serializeReasons.size > 0
  );
}

// A branch (`@catch`/`@placeholder`) is itself static when it has no client
// behavior to attach to a server-rendered instance.
function isBranchStatic(branchSection: Section) {
  return (
    !branchSection.isInteractive &&
    !branchSection.isAsync &&
    !branchSection.referencedClosures &&
    !branchSection.referencedLocalClosures
  );
}

// A try is fully client-static when its body can only catch/pend on the server
// and every branch is itself static. Such a try is never resumed on the client:
// it never re-renders, switches branches, throws, or pends there. So all of its
// content can use the pure `_content` form (DOM: tree-shakeable) and its branch
// resume scope can be skipped (HTML), with `catch` still guarding server-side
// render errors.
function isTryClientStatic(tag: t.NodePath<t.MarkoTag>, bodySection: Section) {
  if (bodyCanThrowOrPendOnClient(bodySection)) return false;
  for (const attrTag of getAttrTagPaths(tag)) {
    if (!attrTag.isMarkoTag()) continue;
    const branchSection = getSectionForBody(attrTag.get("body"));
    if (branchSection && !isBranchStatic(branchSection)) return false;
  }
  return true;
}

// Mark the body and branch content sections so they emit the pure `_content`
// form and skip resume serialization. `downstreamBinding = false` only flips
// `getSectionRegisterReasons` off; it behaves like `undefined` everywhere else.
function pruneClientStaticTry(
  tag: t.NodePath<t.MarkoTag>,
  bodySection: Section,
) {
  if (bodySection.downstreamBinding === undefined) {
    bodySection.downstreamBinding = false;
  }
  for (const attrTag of getAttrTagPaths(tag)) {
    if (!attrTag.isMarkoTag()) continue;
    const branchSection = getSectionForBody(attrTag.get("body"));
    if (branchSection && branchSection.downstreamBinding === undefined) {
      branchSection.downstreamBinding = false;
    }
  }
}

export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    analyzeAttributeTags(tag);
    const section = getOrCreateSection(tag);
    const tagExtra = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );
    tagExtra[kDOMBinding] = createBinding("#text", BindingType.dom, section);

    if (!tag.node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) requires [body content](https://markojs.com/docs/reference/language#tag-content).",
        );
    }

    const bodySection = startSection(tag.get("body"));

    if (bodySection) {
      bodySection.upstreamExpression = tagExtra;
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (!getSectionForBody(tag.get("body"))) {
          tag.remove();
          return;
        }

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        if (tag.node.extra?.attributeTags?.["@placeholder"]) {
          setTryHasPlaceholder(bodySection, true);
        }

        if (isTryClientStatic(tag, bodySection)) {
          pruneClientStaticTry(tag, bodySection);
        }
        setSectionParentIsOwner(bodySection, true);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const section = getSection(tag);
        const tagExtra = node.extra!;
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;
        const clientStatic = isTryClientStatic(tag, bodySection);
        const translatedAttrs = translateAttrs(tag);
        const nodeRef = tagExtra[kDOMBinding]!;

        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);
        tag.insertBefore(translatedAttrs.statements);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_try",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                contentProp?.value,
                propsToExpression(translatedAttrs.properties),
                // A client-static try is never resumed, so skip its branch
                // resume scope serialization.
                clientStatic ? t.numericLiteral(0) : undefined,
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        if (tag.node.extra?.attributeTags?.["@placeholder"]) {
          setTryHasPlaceholder(bodySection, true);
        }

        if (isTryClientStatic(tag, bodySection)) {
          pruneClientStaticTry(tag, bodySection);
        }
        setSectionParentIsOwner(bodySection, true);

        walks.visit(tag, WalkCode.Replace);
        walks.enterShallow(tag);
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const referencedBindings = tagExtra.referencedBindings;

        const translatedAttrs = translateAttrs(tag);
        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "try");

        signal.build = () => {
          return callRuntime(
            "_try",
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection),
            ),
          );
        };

        if (translatedAttrs.statements.length) {
          addStatement(
            "render",
            section,
            referencedBindings,
            translatedAttrs.statements,
          );
        }

        // Only enable the catch runtime when this try can actually go pending or
        // throw on the client; a fully client-static body can only catch/pend on
        // the server. Dropping the non-pure `_enable_catch` also unblocks
        // tree-shaking of the surrounding module.
        if (bodyCanThrowOrPendOnClient(bodySection)) {
          const program = getProgram().node;
          if (!hasEnabledCatch.has(program)) {
            hasEnabledCatch.add(program);
            program.body.push(
              t.expressionStatement(callRuntime("_enable_catch")),
            );
          }
        }

        addValue(
          section,
          referencedBindings,
          signal,
          propsToExpression(translatedAttrs.properties),
        );

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
