import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ a: "&amp;" }, initial, click, incremented],
};

function initial(document: Document) {
  assertTitles(document, "&amp;", 1);
}

function click(document: Document) {
  document.querySelector("button")!.click();
}

function incremented(document: Document) {
  assertTitles(document, "&amp;", 2);
}

function assertTitles(document: Document, value: string, count: number) {
  assert.deepEqual(
    [...document.querySelectorAll("title")].map((title) => title.textContent),
    [`& & & < ${value} - ${count}`, `& & & < ${value} - ${count}`, "& & & <"],
  );
}
