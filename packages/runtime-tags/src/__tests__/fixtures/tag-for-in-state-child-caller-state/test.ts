import type { TestConfig } from "../../main.test";

const clickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.b")!.click();
};
const clickS = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:not(.b)")!.click();
};

// patch-tag-for-in-state-child-caller-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p" },
    { obj: { p: 3, q: 4 }, sel: "q" },
    clickB,
    clickS,
    clickB,
  ],
};
