import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The flush creates the keeper of a body reading a filled value and an
// `<await>` value no fill writes: the registration keeps that level.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", w: resolveAfter("x", 1) },
    { on: true, note: "b", w: resolveAfter("y", 1) },
    toggle,
    toggle,
  ],
};
