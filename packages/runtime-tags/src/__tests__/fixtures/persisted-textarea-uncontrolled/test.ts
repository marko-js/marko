import assert from "assert";

import type { TestConfig } from "../../main.test";

// An uncontrolled textarea patch updates the default (like a client render),
// keeping the live value; a fresh page would show the new default.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { name: "Marko" },
    { name: "Six" },
    (document: Document) =>
      assert.strictEqual(
        document.querySelector("textarea")!.defaultValue,
        "[AB]Six[!]",
      ),
  ],
};
