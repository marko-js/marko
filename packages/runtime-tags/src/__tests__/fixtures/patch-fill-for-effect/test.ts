import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server value joined with client state in a loop the input fills: a
// patch filling it re-runs each item's effect.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: ["one", "two"], label: "a" },
    click,
    { items: ["one", "two"], label: "b" },
    click,
    { items: ["one", "two"], label: "c" },
  ],
};
