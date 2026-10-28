import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  skip_csr: true,
  steps: () => [{ promise: resolveAfter("ready", 2) }, pending, wait],
};
function pending(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id));
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(ids.size, 12);
}
