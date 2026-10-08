// Per-tag patch decisions, all derived on demand from analyze facts
// (nothing is stored on the AST).
import { types as t } from "@marko/compiler";

import { some } from "../optional";
import { getSourcesForExpr, getSourcesForRef } from "../reasons";
import {
  getConstantBindings,
  getReferencedBindingsInFunction,
  type ReferencedExtra,
} from "../references";
import type { Section } from "../sections";
import { mergeSources } from "../sources";
import { TagNameType } from "../tag-name-type";
import { inResumedStructure, writesPatchIn } from "./structure";

// Whether the read's tag writes patch entries naming what it renders: a
// dynamic tag, `content=` or content spread with no state source, if unresumed.
export function isPatchedSite(read: ReferencedExtra) {
  const tagExtra = read.merged || read;
  if (inResumedStructure(read.section)) return false;
  // A dynamic tag's extra merges its name, attrs, args and attr tags.
  if (tagExtra.tagNameType === TagNameType.DynamicTag) {
    return !hasStateSource(tagExtra);
  }
  return (!!read.contentAttr && !hasStateSource(read)) || !!read.attrSetSpread;
}

// A dynamic tag whose renderer, inputs and attr tags have no state source,
// so a patch fills it whole; needs resolved references (finalize).
export function isPatchFilledDynamicTag(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  if (t.isStringLiteral(node.name)) return false;
  // Name, attribute, spread and argument reads all merge into the tag extra.
  return !hasStateSource(node.extra);
}

// A hole a patch writes: in patch-written structure and not state-sourced.
export function writesPatchHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return writesPatchIn(section) && !isStateSourcedExpr(extra);
}

// A state-sourced value recomputes through the signal graph, not a patch.
export function isStateSourcedExpr(extra: t.NodeExtra | undefined) {
  return !!getWriteSources(extra)?.state;
}

// What a patch write of the expression follows: its reads' sources and its
// loop keys' (a key changes with the collection it keys).
export function getWriteSources(extra: t.NodeExtra | undefined) {
  return mergeSources(
    getSourcesForExpr(extra || {}),
    getSourcesForRef(getConstantBindings(extra)),
  );
}

export function hasStateSource(extra: t.NodeExtra | undefined) {
  return (
    !!getWriteSources(extra)?.state ||
    (!!extra &&
      some(
        getReferencedBindingsInFunction(extra as t.FunctionExtra),
        (binding) => !!getSourcesForRef(binding)?.state,
      ))
  );
}
