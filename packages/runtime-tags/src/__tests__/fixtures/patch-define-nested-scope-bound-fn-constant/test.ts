import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function its scope registers, capturing nothing a render changes, passes one
// value on a page and a patch render: a nested call folds it as a constant.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click],
};
