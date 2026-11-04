import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An intersection a tag the client also renders reads an array built from server input:
// its render entry waits on what the array is built from, which the patch writes.
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
