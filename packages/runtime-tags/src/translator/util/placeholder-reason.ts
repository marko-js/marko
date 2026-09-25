import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import { getTagName } from "./get-tag-name";
import { getAttrTagPaths } from "./nested-attribute-tags";
import { some } from "./optional";
import {
  FORCED,
  getUpstreamReasonUntil,
  type KnownExprs,
  mergeSources,
} from "./references";
import {
  getOrCreateSection,
  getSectionForBody,
  isSameOrChildSection,
  type Section,
} from "./sections";
import {
  getSerializeSourcesForExpr,
  mapParamReason,
  type SerializeReason,
} from "./serialize-reasons";
import { createProgramState } from "./state";

/** What within a section (a template, or a `<try>` body with a
 * `@placeholder`) can start async work on the client, outside any
 * `@placeholder` of its own. */
export interface SectionPending {
  /** Whether anything can, as all of it starts when the client creates it. */
  any: boolean;
  /** What starts it once resumed. */
  reason: SerializeReason | undefined;
  /** For a template, the `input` properties it renders as content, whatever
   * its caller passes there. */
  renders: Set<string> | undefined;
}

/** Async work rendered at `section`, which shows the closest `<try>`'s
 * `@placeholder` while pending on the client. */
type PendingSource =
  // An `<await>` (with its value, which starts it on every change) or a lazy tag.
  | { section: Section; value: t.NodeExtra | undefined }
  // A child template, with the call site's input expressions and the input
  // names it passes by attribute (`true` for a spread or arguments).
  | {
      section: Section;
      template: Section;
      exprs: KnownExprs;
      passes: Set<string> | true;
    }
  // Content rendered from a value (a dynamic tag, or a native tag's `content`
  // or spread), which may be anything unless it is the template's own input.
  | { section: Section; renderer: RendererRef | undefined };

/** A renderer read as `id.path…` of a declared identifier. */
interface RendererRef {
  id: t.Identifier;
  path: string[];
}

interface PlaceholderTry {
  tag: t.NodePath<t.MarkoTag>;
  body: Section;
  /** Always has placeholder content, so nothing pending in it reaches past. */
  catches: boolean;
}

const [getPendingSources] = createProgramState((): PendingSource[] => []);
const [getPlaceholderTries] = createProgramState((): PlaceholderTry[] => []);

// An `<await>` (with its value) or a lazy tag.
export function trackPendingTag(
  tag: t.NodePath<t.MarkoTag>,
  value?: t.NodeExtra,
) {
  getPendingSources().push({ section: getOrCreateSection(tag), value });
}

export function trackPendingTemplate(
  tag: t.NodePath<t.MarkoTag>,
  template: Section,
  exprs: KnownExprs,
) {
  const section = getOrCreateSection(tag);
  const { attributes, arguments: args } = tag.node;
  getPendingSources().push(
    // A `<define>` body or this template itself is still being analyzed.
    template.program === section.program
      ? { section, renderer: undefined }
      : {
          section,
          template,
          exprs,
          passes:
            args?.length || attributes.some((attr) => !t.isMarkoAttribute(attr))
              ? true
              : new Set(
                  attributes.map((attr) => (attr as t.MarkoAttribute).name),
                ),
        },
  );
}

// `renderer` is undefined when unknown; a spread renders its `content`.
export function trackPendingRenderer(
  tag: t.NodePath<t.MarkoTag>,
  renderer: t.Node | undefined,
  spread = false,
) {
  const path = spread ? ["content"] : [];
  while (
    t.isMemberExpression(renderer) &&
    !renderer.computed &&
    t.isIdentifier(renderer.property)
  ) {
    path.unshift(renderer.property.name);
    renderer = renderer.object;
  }
  const id =
    t.isIdentifier(renderer) && tag.scope.getBinding(renderer.name)?.identifier;
  getPendingSources().push({
    section: getOrCreateSection(tag),
    renderer: id ? { id, path } : undefined,
  });
}

export function trackPlaceholderTry(tag: t.NodePath<t.MarkoTag>) {
  const placeholder = tag.node.extra!.attributeTags?.["@placeholder"];
  const body = getSectionForBody(tag.get("body"));
  if (placeholder && body) {
    getPlaceholderTries().push({
      tag,
      body,
      catches: !placeholder.dynamic && !placeholder.repeated,
    });
  }
}

// A `@placeholder` renders on the client, once resumed, only for what starts
// pending within its `<try>` body.
export function getPlaceholderReason(section: Section) {
  return section.placeholderFor!.pending?.reason;
}

// Runs before the placeholder content's register reasons are first read.
export function initPlaceholderTries() {
  for (const tryInfo of getPlaceholderTries()) {
    let hasContent = false;
    forEachPlaceholderSection(tryInfo.tag, (section) => {
      section.placeholderFor = tryInfo.body;
      hasContent = true;
    });
    tryInfo.catches &&= hasContent;
  }
}

// Recomputed from the serialize reasons it reads (content registration, what
// creates each branch) on every pass, so it settles with them.
export function finalizePlaceholderReasons() {
  const tries = getPlaceholderTries();
  // A try reads the placeholders of those within it, which were tracked after it.
  for (let i = tries.length; i--;) {
    tries[i].body.pending = getPendingWithin(tries[i].body, tries);
  }
}

// Once reasons settle, records what escapes the template for its callers.
export function finalizeTemplatePending() {
  const program = getProgram().node.extra.section!;
  program.pending = getPendingWithin(program, getPlaceholderTries());
}

function getPendingWithin(
  boundary: Section,
  tries: PlaceholderTry[],
): SectionPending {
  const pending: SectionPending = {
    any: false,
    reason: undefined,
    renders: undefined,
  };
  for (const source of getPendingSources()) {
    if (isPendingWithin(source.section, boundary, tries)) {
      addPendingSource(pending, source, boundary);
    }
  }
  return pending;
}

// Adds what starts `source` pending on the client below `boundary`, creating
// it anew there included.
function addPendingSource(
  pending: SectionPending,
  source: PendingSource,
  boundary: Section,
) {
  let reason: SerializeReason | undefined;
  if ("renderer" in source) {
    // A template's own input renders what its caller wrote, which the caller
    // accounts for where it wrote it.
    const input = boundary.parent
      ? undefined
      : getRenderedInput(source.renderer, boundary);
    if (input !== undefined) {
      (pending.renders ||= new Set()).add(input);
      return;
    }
    reason = FORCED;
  } else if ("template" in source) {
    const { template, passes } = source;
    const childPending = template.pending;
    // Unset while mid-analysis, as in a cycle of templates.
    if (
      !childPending ||
      (childPending.renders &&
        (passes === true ||
          [...childPending.renders].some((name) => passes.has(name))))
    ) {
      reason = FORCED;
    } else if (childPending.any) {
      reason = mergeSources(
        childPending.reason &&
          mapTemplateReason(template, childPending.reason, source.exprs),
        getUpstreamReasonUntil(source.section, boundary),
      );
    } else {
      return;
    }
  } else {
    reason = mergeSources(
      source.value && getSerializeSourcesForExpr(source.value),
      getUpstreamReasonUntil(source.section, boundary),
    );
  }
  pending.any = true;
  pending.reason = mergeSources(pending.reason, reason);
}

// The `input` property a renderer is exactly (`input.content`, a destructured
// `content`, or through a spread of `input` its `content`).
function getRenderedInput(renderer: RendererRef | undefined, program: Section) {
  if (!renderer) return;
  const path = [...renderer.path];
  let binding = renderer.id.extra?.binding;
  while (binding?.upstreamAlias && !binding.restOffset) {
    if (binding.property !== undefined) path.unshift(binding.property);
    binding = binding.upstreamAlias;
  }
  // The template's params hold its `input` first.
  return binding === program.params && path[0] === "0" ? path[1] : undefined;
}

// A child's input params resolve through the call site; its own state, or
// params within it, change regardless of what the caller passes.
function mapTemplateReason(
  template: Section,
  reason: SerializeReason,
  exprs: KnownExprs,
) {
  return reason.forced ||
    reason.state ||
    reason.global ||
    some(reason.param, (param) => param.section !== template)
    ? FORCED
    : mapParamReason(template, reason, exprs, true);
}

// Whether `section` is within `boundary`, and not below a `<try>` in it that
// always shows its own placeholder instead.
function isPendingWithin(
  section: Section,
  boundary: Section,
  tries: PlaceholderTry[],
) {
  return (
    isSameOrChildSection(boundary, section) &&
    !tries.some(
      ({ body, catches }) =>
        catches &&
        body !== boundary &&
        isSameOrChildSection(boundary, body) &&
        isSameOrChildSection(body, section),
    )
  );
}

// Includes `@placeholder` tags within attribute tag control flow.
function forEachPlaceholderSection(
  tag: t.NodePath<t.MarkoTag>,
  fn: (section: Section) => void,
) {
  for (const child of getAttrTagPaths(tag)) {
    if (child.isMarkoTag()) {
      if (!isAttributeTag(child)) {
        forEachPlaceholderSection(child, fn);
      } else if (getTagName(child) === "@placeholder") {
        const section = getSectionForBody(child.get("body"));
        if (section) fn(section);
      }
    }
  }
}
