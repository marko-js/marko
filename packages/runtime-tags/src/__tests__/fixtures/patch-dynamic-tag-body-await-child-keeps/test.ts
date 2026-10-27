import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A renderer passes the body to a known child it renders under its `<await>`,
// which keeps it under its state.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: true, note: "a", p: resolveAfter(1, 1) },
    { on: true, note: "b", p: resolveAfter(1, 1) },
    toggle,
    toggle,
    { on: true, note: "c", p: resolveAfter(1, 1) },
    toggle,
    toggle,
  ],
};
