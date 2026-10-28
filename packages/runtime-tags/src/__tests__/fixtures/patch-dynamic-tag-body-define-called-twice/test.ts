import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A `<define>` reading an outer value is called directly and inside a
// body another `<define>` hands a renderer that keeps it.
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
