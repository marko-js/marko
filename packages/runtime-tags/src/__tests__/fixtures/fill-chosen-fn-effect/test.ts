import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// patch-fill-chosen-fn-effect without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { upper: false },
    click,
    { upper: false },
    { upper: true },
    { upper: true },
  ],
};
