import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child reads its created owner's `<let>` through a function the owner passes:
// the owner's seed is a plain write, which lands before the child's entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "d" },
  ],
};
