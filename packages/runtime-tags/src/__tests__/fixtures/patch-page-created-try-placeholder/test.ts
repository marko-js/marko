import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A page a patch creates whose `<try>` placeholder shows while its await
// settles in a later flush of the same response: the settle must replace
// the placeholder with the body, as it does for a boundary the page had.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { page: "a", promise: Promise.resolve("x") },
    navigate(() => ({ page: "b", promise: resolveAfter("slow") })),
    { page: "a", promise: Promise.resolve("y") },
  ],
};
