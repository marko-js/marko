import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer hands the body on under its own `<await>`, to one that keeps it:
// until the `<await>` settles, the gates around it count the body kept.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: true, note: "a", p: resolveAfter(1, 1) },
    navigate(() => ({ on: true, note: "b", p: resolveAfter(1, 1) })),
    toggle,
    toggle,
    navigate(() => ({ on: true, note: "c", p: resolveAfter(1, 1) })),
    toggle,
    toggle,
  ],
};
