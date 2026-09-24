import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A client-owned keyed list drops a row while the row's await is pending;
// the settle flush then re-links the removed row by its hop.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("a") },
    navigate(
      () => ({ promise: resolveAfter("b") }),
      (document: Document) => document.querySelector("button")!.click(),
    ),
  ],
};
