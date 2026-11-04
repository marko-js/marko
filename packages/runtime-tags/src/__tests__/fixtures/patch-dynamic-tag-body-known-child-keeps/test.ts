import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer keeps a known child under its state, and the child renders the
// body it is passed: the renderer's state keeps the body.
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
