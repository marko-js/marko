import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The main stream serializes `shared` (and `shared.inner` nested within
// it) inline without bindings. Child S references the `shared` object, so
// S's stream claims its binding (`_.x=_(1).…`). Child B then references
// `shared.inner`: a binding claimed by S's stream is not reachable from
// sibling B, so B's access path must be re-derived from a reachable base
// instead — emitting `_(1).….inner` through the canonical scope rather
// than referencing `_.x` (which would only work if S's module happened to
// be processed first).
//
// Template data is treated as immutable, so identity is observed the legal
// way — through function references that close over the owner's state:
// each child clicks through to a checker from main and renders the result.
// Both buttons rendering "true" proves the siblings' deserialized values
// resolve the one canonical object graph; a detached copy would render
// "false". (`isInner` reads `inner` through a computed path so main's own
// serialized scope keeps only the whole `shared` — closing over
// `shared.inner` directly would make main bind `inner` itself, removing
// the sibling-claimed parent this fixture exists to exercise.)
export const config: TestConfig = {
  steps: [{}, wait, wait, clickS, clickB],
  equivalent: false,
};

function clickS(container: Element) {
  container.querySelector<HTMLButtonElement>(".s")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>(".b")!.click();
}
