import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const drop = (document: Document) => {
  document.querySelector<HTMLElement>("button")!.click();
};
const one = (label: string) => (document: Document) => {
  assert.equal(document.querySelectorAll("div").length, 1, label);
};

// A navigation keeps the rows a client-owned list removed.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("a") },
    drop,
    one("dropped"),
    { promise: resolveAfter("b") },
    wait,
    one("after navigation"),
  ],
};
