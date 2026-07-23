import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const childText = (document: Document) =>
  document.querySelector("button.child")?.textContent;

// A constructed branch rendering a `<define>` child whose closure reads the
// parent's `<let>`: the child's `Owner` linkage (established by setup in a
// CSR render) must be wired at construction, or the closure fill reads
// through an undefined owner and reactivity is dead.
// Skipped pending the construct pass (round-4 F9): today the apply crashes
// in `_update_if` before owner wiring is even reached (no bound if marker
// on the resumed root for this shape).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(childText(document), "1"),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.child")!.click(),
    (document: Document) => assert.equal(childText(document), "2"),
  ],
};
