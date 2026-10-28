import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// An effect reads a value a kept body under an `<await>` also reads.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", v: resolveAfter("x", 1) },
    navigate(() => ({ on: false, note: "b", v: resolveAfter("y", 1) })),
    navigate(() => ({ on: true, note: "c", v: resolveAfter("z", 1) })),
    toggle,
    toggle,
    navigate(() => ({ on: false, note: "d", v: resolveAfter("w", 1) })),
  ],
};
