import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer renders the body under one destructured name and keeps it under
// another, under its state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, note: "a" },
    { on: true, note: "b" },
    toggle,
    toggle,
    { on: true, note: "c" },
    toggle,
    toggle,
  ],
};
