import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created `@catch` calls a stateful body with a constant: it creates from its
// registered renderer, whose setup does the call's work.
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
