import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child a dynamic tag creates from its own shell runs the join of its input
// and its state once, by the init its shell names.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a1" },
    { show: true, a: "a2" },
    click,
    { show: true, a: "a3" },
  ],
};
