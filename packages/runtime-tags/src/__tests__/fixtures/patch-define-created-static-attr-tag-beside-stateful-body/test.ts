import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created call passes a stateful body a static attribute tag of constants:
// its value runs from the init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, open: true, label: "a" },
    { show: true, open: true, label: "b" },
    click,
    { show: true, open: true, label: "c" },
    { show: false, open: true, label: "d" },
    { show: true, open: true, label: "e" },
  ],
};
