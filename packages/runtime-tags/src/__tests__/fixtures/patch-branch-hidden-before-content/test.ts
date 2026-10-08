import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

export const config: TestConfig = {
  patches: true,
  steps: () => [
    { error: "", promise: resolveAfter("one") },
    navigate(() => ({ error: "", promise: resolveAfter("two") })),
    navigate(() => ({ error: "bad", promise: resolveAfter("three") })),
    navigate(() => ({ error: "", promise: resolveAfter("four") })),
  ],
};
