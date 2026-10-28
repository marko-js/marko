import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// An `<await>` in a body its renderer keeps takes each later patch's promise
// by the fill.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: true, note: "a", w: resolveAfter("x", 1) },
    navigate(() => ({ on: true, note: "b", w: resolveAfter("y", 1) })),
    toggle,
    toggle,
    navigate(() => ({ on: true, note: "c", w: resolveAfter("z", 1) })),
  ],
};
