import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const childText = (document: Document) =>
  document.querySelector("button.child")?.textContent;

// A constructed branch rendering a `<define>` child whose closure reads the
// parent's `<let>`: the child's `Owner` linkage (established by setup in a
// CSR render) must be wired at construction — otherwise the closure fill
// reads through a stale patch-space owner and reactivity is dead. Also
// pins the persisted walk guarantee: this page's document has no effects,
// so its if anchor only resume-binds because `M._.w()` is always emitted.
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
