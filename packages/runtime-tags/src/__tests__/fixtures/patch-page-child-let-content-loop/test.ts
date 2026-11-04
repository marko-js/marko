import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child renders content it keeps in a `<let>` through a `<for>`, and the content
// reads a value a patch changes: the flush reaches its resumed instance.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
