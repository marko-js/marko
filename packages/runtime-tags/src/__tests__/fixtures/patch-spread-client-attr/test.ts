import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const mounted = (document: Document) => {
  assert.ok(
    document.querySelector("div")!.hasAttribute("data-mounted"),
    "resume",
  );
};
const kept = (document: Document) => {
  assert.ok(
    document.querySelector("div")!.hasAttribute("data-mounted"),
    "kept",
  );
};

// A patched spread leaves an attribute the template lists after it, here one
// a script sets, as a client render's spread does.
export const config: TestConfig = {
  patches: true,
  steps: [{ attrs: { title: "a" } }, mounted, { attrs: { title: "a" } }, kept],
};
