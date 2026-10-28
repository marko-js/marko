import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-effect-renders-client-chosen-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
