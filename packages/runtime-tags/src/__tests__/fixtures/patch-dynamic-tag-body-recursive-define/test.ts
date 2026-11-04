import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A recursive `<define>` reads an outer value, and calls itself inside a
// body a renderer keeps.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: true, note: "a" },
    { on: true, note: "b" },
    toggle,
    toggle,
    { on: true, note: "c" },
    toggle,
    toggle,
  ],
};
