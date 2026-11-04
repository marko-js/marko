import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A nested branch a patch creates joins a param its caller passes client state
// with one it passes server data, and subscribes to the first.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: false, x: "c" },
    click,
    { show: true, x: "d" },
    click,
    { show: true, x: "e" },
  ],
};
