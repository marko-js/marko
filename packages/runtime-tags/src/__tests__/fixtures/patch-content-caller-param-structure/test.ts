import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's `<if>`, `<for>` and dynamic tag over content, and the tag's own one,
// each selected by caller state through a param and a `<const>`: 8 cells.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }, click],
};
