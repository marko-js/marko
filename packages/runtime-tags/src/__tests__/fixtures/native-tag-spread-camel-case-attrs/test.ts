import type { TestConfig } from "../../main.test";

// Parsing lowercases camelCase attribute names (except SVG's own, like `viewBox`),
// so static attrs beside a spread survive its updates and still win over its keys.
function update(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ rest: { "aria-label": "a" } }, update],
};
