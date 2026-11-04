import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created call's stateful body has setup work (`<let/n=1/>`): the child's
// init runs the body's setup, though the call passes only bound values.
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
