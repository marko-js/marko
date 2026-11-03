import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
// A body a patched renderer renders inside one the client renders takes a later
// patch's value of what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, p: true, note: "a" },
    { on: true, p: true, note: "b" },
    toggle,
    toggle,
    { on: true, p: true, note: "c" },
  ],
};
