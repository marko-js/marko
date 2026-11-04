import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-child-renders-fn-reading-client-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", x: 0 },
    click,
    { label: "a", x: 1 },
    { label: "b", x: 1 },
  ],
};
