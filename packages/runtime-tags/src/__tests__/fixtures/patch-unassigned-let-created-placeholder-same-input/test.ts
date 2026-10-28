import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// An unassigned `<let>` read in a `@placeholder` a patch shows, its input unchanged: a
// fresh render shows the client's value.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, v: "a" },
    { show: true, v: "a", p: resolveAfter("r", 2) },
    wait,
  ],
};
