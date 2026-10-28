import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer keeps the body as a value it derives under its `<await>`, through
// further content.
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
