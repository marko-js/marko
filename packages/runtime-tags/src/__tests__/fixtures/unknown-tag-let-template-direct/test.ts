import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-unknown-tag-let-template-direct without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ framed: true, label: "a" }, click],
};
