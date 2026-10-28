import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A value read in a body under an `<await>` and in one beside it: each body's
// gate runs where that body exists, the root's and the await body's end.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", v: resolveAfter("x", 1) },
    { on: true, note: "b", v: resolveAfter("y", 1) },
    toggle,
    toggle,
    { on: false, note: "c", v: resolveAfter("z", 1) },
  ],
};
