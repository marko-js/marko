import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A stateful chain inside a branch on input: patches still reach
// it, and revealing the outer branch creates it from its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, title: "a" },
    click,
    { show: true, title: "b" },
    click,
    { show: true, title: "c" },
    { show: false, title: "d" },
    { show: true, title: "e" },
  ],
};
