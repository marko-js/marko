import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, initial, click, incremented],
};

function initial(document: Document) {
  assertBodies(document, 1);
}

function click(document: Document) {
  document.querySelector("button")!.click();
}

function incremented(document: Document) {
  assertBodies(document, 2);
}

function assertBodies(document: Document, n: number) {
  assert.equal(document.querySelector(".title")!.textContent, `title ${n}`);
  assert.equal(
    document.querySelector(".textarea")!.textContent,
    `textarea ${n}`,
  );
}
