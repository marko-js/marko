import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

const globals = (flag: string, mark: string) => ({
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A child value mixing a client-fed param with `$global` is filled by every
// patch: its join subscribes as the client re-runs it, not from the document.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    globals("1", "x"),
    click,
    shows("11x"),
    globals("1", "y"),
    shows("11y"),
    globals("2", "z"),
    shows("12z"),
  ],
};
