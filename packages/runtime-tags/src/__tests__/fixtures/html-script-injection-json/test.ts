import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const a = "</script><!--<script>";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ a }, parseJSON],
};

function parseJSON(document: Document) {
  const script = document.querySelector("[type='application/ld+json']")!;
  assert.deepEqual(JSON.parse(script.textContent!), { a });
}
