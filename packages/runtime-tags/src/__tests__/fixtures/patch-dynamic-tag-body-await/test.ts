import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A body under `<await>` that a renderer keeps: what it reads fills at the
// await body's end, where the body exists.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", v: resolveAfter("x", 1) },
    navigate(() => ({ on: true, note: "b", v: resolveAfter("y", 1) })),
    toggle,
    toggle,
    navigate(() => ({ on: true, note: "c", v: resolveAfter("z", 1) })),
    toggle,
    toggle,
  ],
};
