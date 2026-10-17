import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created `@catch` calls a stateful body with a constant: its shell names
// the call's init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    click,
    { fail: true, label: "c" },
    { fail: false, label: "d" },
    { fail: true, label: "e" },
  ],
};
