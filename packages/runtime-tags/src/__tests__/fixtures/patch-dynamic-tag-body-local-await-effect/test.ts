import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A branch local an effect reads beside content under an `<await>` body.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, on: false, note: "a", v: resolveAfter("x", 1) },
    { show: true, on: false, note: "b", v: resolveAfter("y", 1) },
    { show: true, on: true, note: "c", v: resolveAfter("z", 1) },
    toggle,
    toggle,
    { show: true, on: false, note: "d", v: resolveAfter("w", 1) },
  ],
};
