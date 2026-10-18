import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer keeps the body it is handed under its own `<await>`, which settles
// after the flush decides the body's fills: the pending await counts as kept.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", p: resolveAfter(1, 1) },
    { on: true, note: "b", p: resolveAfter(1, 1) },
    toggle,
    toggle,
    { on: true, note: "c", p: resolveAfter(1, 1) },
    toggle,
    toggle,
  ],
};
