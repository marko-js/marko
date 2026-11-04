import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An object built from server input inside a branch the flush writes: the render entry
// of the intersection reading it waits on what it is built from, which the patch writes.
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
