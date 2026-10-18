import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
// A body inside another dynamic tag's body takes a later patch's value of what it
// reads where the outer renderer leaves it to client code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, p: false, note: "a" },
    { on: true, p: true, note: "b" },
    toggle,
    toggle,
    { on: true, p: true, note: "c" },
  ],
};
