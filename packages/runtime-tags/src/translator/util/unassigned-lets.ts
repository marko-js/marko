import type { types as t } from "@marko/compiler";
import { diagnosticWarn } from "@marko/compiler/babel-utils";

import { createProgramState } from "./state";

// A `<let>` that is never assigned and whose initializer reads reactive state
// is either a one-time capture of a "first"/untracked value (valid — `<let>`'s
// evaluate-once semantics are the snapshot primitive) or a mistaken `<const>`
// whose value silently never updates. The mistake is the most common silent
// failure in observed agent-written templates and is invisible at runtime
// (the page renders, then never reacts), so the warning names both readings
// and the fix. Deciding "never assigned" needs the whole template analyzed,
// so `<let>` registers candidates during analyze and the program's analyze
// exit reports them once references are finalized.

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
        label: `The \`<let/${name}>\` variable is never assigned, so its value is captured once and will not update when the values it reads change. Use \`<const/${name}=...>\` for a derived value that recomputes; keep \`<let>\` if a one-time capture of the initial value is intended.`,
      });
    }
  }
}
