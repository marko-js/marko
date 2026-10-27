import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const input = () => ({ title: "t", text: "x", rows: [1, 2] });
const type = (document: Document) => {
  for (const el of document.querySelectorAll("input")) el.value = "typed";
};
const kept = (document: Document) => {
  const inputs = [...document.querySelectorAll("input")];
  assert.deepEqual(
    inputs.map((el) => el.value),
    inputs.map(() => "typed"),
  );
};

// A layout's content and per-row bodies keep typed input across a patch.
export const config: TestConfig = {
  patches: true,
  steps: [input(), type, input(), kept],
};
