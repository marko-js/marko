import type { types as t } from "@marko/compiler";

import type { Section } from "./sections";
import { createSectionState } from "./state";

/**
 * Tracks during analyze whether translate will add setup-signal statements, so a
 * template can prove its setup export is a noop and parents can skip calling it.
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
