import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// The body is rendered both inside the child's stateful `<if>` and outside it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("one") },
    navigate(() => ({ promise: resolveAfter("two") })),
  ],
};
