import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// In a `<define>` body, a hole joins the value and the body's own param: its write
// takes both caller groups, one the promise lacks, so a paired render waits.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: Promise.resolve("b") },
    wait,
  ],
};
