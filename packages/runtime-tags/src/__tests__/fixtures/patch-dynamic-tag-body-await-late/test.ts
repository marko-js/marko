import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The await settles in a later flush than the root's: what its body reads
// fills in that flush, and not where a native tag renders the body.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { on: false, note: "a", v: Promise.resolve("x") },
    navigate(() => ({ on: true, note: "b", v: resolveAfter("y") })),
    toggle,
    toggle,
    navigate(() => ({ on: true, note: "c", v: resolveAfter("z") })),
    toggle,
    toggle,
    navigate(() => ({ on: false, note: "d", v: resolveAfter("w") })),
  ],
};
