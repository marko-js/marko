import type { types as t } from "@marko/compiler";
import { diagnosticWarn } from "@marko/compiler/babel-utils";

import { createProgramState } from "./state";

// A `<let>` that is never assigned and whose initializer reads reactive state
// is almost always a mistaken `<const>`: the value is computed once and then
// silently never updates. This is the single most common silent mistake in
// observed agent-written templates, and it is invisible at runtime (the page
// renders, then never reacts). Deciding "never assigned" needs the whole
// template analyzed, so `<let>` registers candidates during analyze and the
// program's analyze exit reports them once references are finalized.

const [getUnassignedLets] = createProgramState(
  () => [] as t.NodePath<t.MarkoTag>[],
);

export function trackUnassignedLet(tag: t.NodePath<t.MarkoTag>) {
  getUnassignedLets().push(tag);
}

export function warnUnassignedDerivedLets() {
  for (const tag of getUnassignedLets()) {
    // Only warn when the initializer references reactive bindings; a static
    // initial value that is never assigned is inert and harmless.
    if (tag.node.extra?.referencedBindings) {
      const name = (tag.node.var as t.Identifier).name;
      diagnosticWarn(tag, {
        label: `The \`<let/${name}>\` variable is never assigned, so its value is computed once and will not update when the values it reads change. For a derived value that recomputes, use \`<const/${name}=...>\` instead.`,
      });
    }
  }
}
