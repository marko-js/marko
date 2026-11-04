import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child template only the client renders (a `<let>` shows it) takes a patch of its
// input: its holes, its closure in a branch and its effect update.
export const config: TestConfig = {
  patches: true,
  steps: [{ value: "a" }, click, { value: "b" }, click, click, { value: "c" }],
};
