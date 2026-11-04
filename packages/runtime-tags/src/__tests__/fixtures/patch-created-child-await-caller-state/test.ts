import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// A patch creates two calls of a child whose `<await>` takes its input's
// promise, one made from the caller's `<let>`, one the server's: each is
// created from the await's Pending entry, and the first then follows the
// caller's state.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, p: Promise.resolve("a") },
    { show: true, p: resolveAfter("b") },
    wait,
    toggle,
    wait,
    toggle,
    wait,
  ],
};
