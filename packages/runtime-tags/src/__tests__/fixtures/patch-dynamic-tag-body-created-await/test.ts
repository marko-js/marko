import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The flush creates the renderer keeping a body that reads a value the flush
// fills and an `<await>` value no fill writes: the registration keeps the
// `<await>` value's level. (A later flush's `<await>` value inside kept content
// renders stale on the client, a separate filed case.)
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", w: resolveAfter("x", 1) },
    { on: true, note: "b", w: resolveAfter("y", 1) },
    toggle,
    toggle,
  ],
};
