import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An object built from the value inside a branch, which the flush writes: the
// init waits on the object's slot, which that write marks.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, x: "a" },
    click,
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
