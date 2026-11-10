import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-mixed-intersection-filled-member-array without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, x: "a" },
    click,
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
