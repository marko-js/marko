import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-fill-fn-unknown-spot-beside-live-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", key: "fmt", pre: [] },
    { title: "b", key: "fmt", pre: [] },
    click,
    { title: "c", key: "fmt", pre: [] },
    click,
  ],
};
