import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer derives the body under its `<await>` and hands it to a dynamic tag
// under a nested one, which turns out to keep it.
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
