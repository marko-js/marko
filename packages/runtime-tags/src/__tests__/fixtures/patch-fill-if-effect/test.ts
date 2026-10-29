import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server value joined with client state in a branch the input picks: a
// patch filling it re-runs the branch's effect.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    click,
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
