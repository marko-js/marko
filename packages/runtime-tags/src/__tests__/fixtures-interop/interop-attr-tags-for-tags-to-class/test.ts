import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A class component renders content an attribute tag `<for>` created with its
// loop values, and with the new ones when the loop changes them.
export const config: TestConfig = {
  skip_optimize: true,
  // Resume empties the list: agent-feedback/items/2026-10-16-resume-a-class-component-s-attribute-tags-from-a-tags-for.md
  skip_ssr: true,
  steps: [{}, click],
};
