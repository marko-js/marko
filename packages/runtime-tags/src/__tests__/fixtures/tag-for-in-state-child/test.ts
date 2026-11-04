import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-tag-for-in-state-child without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p", b: "x" },
    click,
    { obj: { p: 3, q: 4 }, sel: "q", b: "y" },
    click,
  ],
};
