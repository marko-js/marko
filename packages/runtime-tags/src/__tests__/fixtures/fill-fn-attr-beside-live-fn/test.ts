import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-fill-fn-attr-beside-live-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", flag: true },
    { title: "b", flag: true },
    click,
    { title: "c", flag: true },
    click,
  ],
};
