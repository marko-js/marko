import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-unknown-tag-let-template-via-child without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ framed: true, label: "a" }, click],
};
