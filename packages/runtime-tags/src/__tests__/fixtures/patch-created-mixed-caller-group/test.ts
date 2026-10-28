import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call passes one param client state and server data together: a branch a
// patch creates reads it by its own closure, and a nested one by subscribing.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: false, x: "c" },
    click,
    { show: true, x: "d" },
    click,
    { show: true, x: "e" },
  ],
};
