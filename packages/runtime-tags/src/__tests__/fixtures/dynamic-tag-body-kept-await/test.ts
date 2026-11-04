import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { on: true, note: "a", w: resolveAfter("x", 1) },
    { on: true, note: "b", w: resolveAfter("y", 1) },
    toggle,
    toggle,
    { on: true, note: "c", w: resolveAfter("z", 1) },
  ],
};
