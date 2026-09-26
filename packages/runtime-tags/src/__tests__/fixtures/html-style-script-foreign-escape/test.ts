import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const value = "red&amp;<x>";

export const config: TestConfig = {
  steps: [{ value }, readText],
};

// The render log omits html namespace `<style>` tags, like those in the integration points.
function readText(document: Document) {
  assert.deepEqual(
    Array.from(
      document.querySelectorAll("style, script[type='text/plain']"),
      (el) => el.textContent,
    ),
    [
      `.a{color:${value}}`,
      `<${value}`,
      `.b{color:${value}}`,
      `.c{color:${value}}`,
      `.d{color:${value}}`,
    ],
  );
}
