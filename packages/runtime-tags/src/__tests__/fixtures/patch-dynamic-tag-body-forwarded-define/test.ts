import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
// A body a renderer passes on to a `<define>` that renders it under its own state
// takes a later patch's value of what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, inner: true, note: "a" },
    { on: true, inner: true, note: "b" },
    toggle,
    toggle,
    { on: true, inner: true, note: "c" },
  ],
};
