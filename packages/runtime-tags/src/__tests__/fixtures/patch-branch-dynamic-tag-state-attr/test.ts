import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created branch's dynamic tag writes the state attribute it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, on: true },
    { show: true, on: true },
    click,
    { show: true, on: false },
    { show: false, on: false },
    { show: true, on: true },
  ],
};
