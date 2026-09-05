// Program-level runtime knowledge for persisted pages: child renderers,
// `$global` reads, and the scope-reason runtime name.
import type { types as t } from "@marko/compiler";

import { isPersisted } from "../marko-config";
import { createProgramState } from "../state";

// Child renderers for the html intrinsics export; transitive global
// knowledge composes at RENDER time, never at compile.
const [getPersistedChildRenderers] = createProgramState(() => ({
  names: new Set<string>(),
  opaque: false,
}));

export function addPersistedChildRenderer(expr: t.Node) {
  const state = getPersistedChildRenderers();
  if (expr.type === "Identifier") {
    state.names.add(expr.name);
  } else {
    // An unaddressable renderer cannot join the union: the template goes
    // opaque so parents always render through it.
    state.opaque = true;
  }
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** This template ITSELF reads `$global` (local, no roll-up): exported
     * as the html template's intrinsics for render-time composition. */
    readsGlobals?: true;
  }
}

export function getPersistedIntrinsics() {
  return getPersistedChildRenderers();
}

export function scopeReasonRuntime() {
  return isPersisted()
    ? ("_persisted_reason" as const)
    : ("_scope_reason" as const);
}
