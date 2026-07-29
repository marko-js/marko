import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// The truthful manifest of the same composition: the branch is not held
// (its client shell would be missing the child's frame), so it constructs
// from the server's wire shell, which carries the frame markup. The
// fragment parser drops `html`/`head`/`body` and keeps their content —
// degraded, never silently omitted, and still live.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) =>
      assert.equal(
        document.querySelector("header.frame")?.textContent,
        "STATIC FRAME",
      ),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.frame-count")!.click(),
    (document: Document) =>
      assert.equal(
        document.querySelector("button.frame-count")?.textContent,
        "1",
      ),
  ],
};
