import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const titled = (text: string) => (document: Document) => {
  assert.equal(document.title, text);
};

// An effect in the body reads a closure the patch writes, beside the value.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    titled("a"),
    { label: "b", promise: Promise.resolve("b") },
    wait,
    titled("b"),
  ],
};
