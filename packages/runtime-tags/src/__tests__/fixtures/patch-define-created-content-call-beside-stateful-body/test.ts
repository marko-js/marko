import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content a flush creates from its shell calls a stateful body with a
// constant: the content's shell names the call's init.
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
