import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An attr tag feeds a client-owned child like body content: its body
// compiles in this file and its filled reads stay fresh across patches.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a" },
    toggle,
    { title: "b" },
    toggle,
    { title: "c" },
    toggle,
    { title: "d" },
  ],
};
