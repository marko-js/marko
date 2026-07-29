import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// A structural selection driven by an opaque MEMBER read (no call, no
// tracked reference): the compile cannot prove it renders the same on
// the next navigation, so persisted mode must still deliver the
// selection. Inferring stability from AST shape leaves the client on a
// branch the server no longer renders, silently.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    (document: Document) => {
      assert.ok(document.querySelector("p.primary"));
      process.env.MARKO_OPAQUE_IF_VIEW = "fallback";
    },
    navigate({ $global: { persisted: true } }),
    (document: Document) => {
      assert.ok(
        document.querySelector("p.fallback"),
        "opaque structural read did not deliver its new selection",
      );
      assert.equal(document.querySelector("p.primary"), null);
      delete process.env.MARKO_OPAQUE_IF_VIEW;
    },
  ],
};
