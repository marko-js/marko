import type { types as t } from "@marko/compiler";

import type { Section } from "./sections";
import { createSectionState } from "./state";

/**
 * Tracks, during analyze, whether translate will add statements to a
 * section's setup signal (the signal keyed by no referenced bindings).
 * Sites that key statements by an expression's resolved references register
 * the expression with `addSetupExpr`; sites that always target the setup
 * signal call `addSetupStatement`. Expressions that resolve references
 * through `mergeReferences` are covered centrally by `finalizeReferences`.
 *
 * This lets a template's analyze phase prove its setup export is a noop so
 * parent templates can skip importing and calling it. The proof is checked
 * when the template itself is translated (see `visitors/program/dom.ts`).
 */

const [getSetupInfo] = createSectionState("setupStatements", () => ({
  forced: false,
  exprs: new Set<t.NodeExtra>(),
}));

export function addSetupStatement(section: Section) {
  getSetupInfo(section).forced = true;
}

export function addSetupExpr(section: Section, node: t.Node | undefined) {
  if (node) {
    getSetupInfo(section).exprs.add((node.extra ??= {}));
  } else {
    getSetupInfo(section).forced = true;
  }
}

export function sectionHasSetupStatements(section: Section) {
  const info = getSetupInfo(section);
  if (info.forced) return true;
  for (let extra of info.exprs) {
    while (extra.merged) extra = extra.merged;
    if (!extra.pruned && !extra.referencedBindings) {
      return true;
    }
  }
  return false;
}
