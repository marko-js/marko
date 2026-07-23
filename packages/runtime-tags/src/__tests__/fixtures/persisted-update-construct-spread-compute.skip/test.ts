import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const childText = (document: Document) =>
  document.querySelector("button.child")?.textContent;

// A `<define>` child spread from a server-only compute inside a constructed
// branch: the construct pass must deliver the server-captured spread values
// and must never re-execute the compute client-side (it throws there).
// Skipped pending the construct pass (round-4 emission amendment 1); today
// the apply crashes first on the same no-initial-branch if-anchor resume
// gap as `persisted-update-construct-child-owner.skip`.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(childText(document), "server 0"),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.child")!.click(),
    (document: Document) => assert.equal(childText(document), "server 1"),
  ],
};
