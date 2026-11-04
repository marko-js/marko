import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A `<define>` one tag renders and another keeps under its own state: the
// render does not stand in for the one the client makes later.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: true, on: true, note: "a" },
    { x: true, on: true, note: "b" },
    toggle,
    toggle,
    { x: true, on: true, note: "c" },
  ],
};
