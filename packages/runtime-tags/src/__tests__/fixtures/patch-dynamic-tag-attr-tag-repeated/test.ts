import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// Two attribute tags a renderer keeps under its own state: each one's reads
// fill.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, a: "a1", b: "b1" },
    { on: true, a: "a2", b: "b2" },
    toggle,
    toggle,
    { on: true, a: "a3", b: "b3" },
    toggle,
    toggle,
  ],
};
