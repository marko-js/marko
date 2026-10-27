import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A body reading its whole input derives the module function a call passes in it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
