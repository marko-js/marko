import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-body-content-state-param without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ y: "1" }, click, { y: "2" }, click, { y: "3" }],
};
