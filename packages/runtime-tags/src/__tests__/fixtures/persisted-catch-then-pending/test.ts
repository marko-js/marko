import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A rejected boundary followed by a frame whose await is still pending:
// the pending UI replaces the live catch content, then the settle lands.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve(), detail: "a" },
    { promise: Promise.reject(new Error("x")), detail: "b" },
    { promise: resolveAfter(2), detail: "c" },
    wait,
    flush,
  ],
};
