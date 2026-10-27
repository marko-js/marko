import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-child-passes-server-chosen-stateful-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", upper: true },
    click,
    { title: "b", upper: true },
    click,
    { title: "b", upper: false },
    { title: "c", upper: false },
  ],
};
