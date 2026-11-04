import type { TestConfig } from "../../main.test";

const append = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-return-change-reads-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a" }, append],
};
