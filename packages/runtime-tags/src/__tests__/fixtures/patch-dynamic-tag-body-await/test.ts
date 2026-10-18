import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A body under `<await>` that a renderer keeps: the flush decides its fills
// before the await settles, so the pending await counts as keeping it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", v: resolveAfter("x", 1) },
    { on: true, note: "b", v: resolveAfter("y", 1) },
    toggle,
    toggle,
    { on: true, note: "c", v: resolveAfter("z", 1) },
    toggle,
    toggle,
  ],
};
