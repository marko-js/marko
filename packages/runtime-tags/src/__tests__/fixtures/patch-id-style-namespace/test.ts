import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  runtime_id: "ids",
  steps: [{ color: "red", $global: { runtimeId: "ids" } }, checkNamespace],
};
function checkNamespace(document: Document) {
  const input = document.querySelector("input")!;
  assert.equal(document.querySelectorAll("style").length, 361);
  assert.equal(input.labels?.length, 1);
  assert(/^[cs]ids_/.test(input.id), input.id);
  for (const style of document.querySelectorAll("style"))
    assert.notEqual(style.className, input.id);
}
