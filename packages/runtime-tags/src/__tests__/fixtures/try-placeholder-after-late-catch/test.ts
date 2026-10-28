import type { TestConfig } from "../../main.test";
import { rejectAfter, resolveAfter, wait } from "../../utils/resolve";

// A try caught after its body streamed, then a placeholder try past a pending
// await, streaming later.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    {
      a: rejectAfter(new Error("boom"), 1),
      x: resolveAfter(5, 2),
      c: resolveAfter(6, 4),
      d: resolveAfter(7, 3),
    },
    wait,
  ],
};
