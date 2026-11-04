import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer keeps the body under its state in an `<await>` settling after the
// flush's gates: it reports the body through the `<const>` it derives.
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
