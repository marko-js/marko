import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A rejected boundary followed by a flush whose await is still pending:
// the live catch content stays up until the settle lands and takes it over.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve(), detail: "a" },
    { promise: Promise.reject(new Error("x")), detail: "b" },
    { promise: resolveAfter(2), detail: "c" },
    wait,
    flush,
  ],
};
