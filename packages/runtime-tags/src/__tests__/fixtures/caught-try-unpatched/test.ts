import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin of `patch-caught-try-unpatched`: the document main renders.
export const config: TestConfig = {
  steps: [{ label: "a", fail: true }, click, click],
};
