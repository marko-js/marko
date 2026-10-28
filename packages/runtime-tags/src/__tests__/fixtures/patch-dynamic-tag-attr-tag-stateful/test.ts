import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// An attribute tag a dynamic tag's renderer shows under its own state takes
// a patch's value of what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    { on: true, note: "b" },
    toggle,
    toggle,
    { on: true, note: "c" },
  ],
};
