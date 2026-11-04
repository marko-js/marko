import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A known child's constant param, read in content under its `<await>`, in a
// scope the flush creates and one it pairs.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, on: true, v: resolveAfter("x", 1) },
    { show: true, on: true, v: resolveAfter("y", 1) },
    toggle,
    toggle,
    { show: true, on: true, v: resolveAfter("z", 1) },
    toggle,
    toggle,
  ],
};
