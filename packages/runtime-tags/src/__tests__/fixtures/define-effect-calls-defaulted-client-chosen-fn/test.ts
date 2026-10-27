import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-effect-calls-defaulted-client-chosen-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a" },
    click,
    { title: "b" },
    click,
    { title: "c" },
    { title: "c" },
  ],
};
