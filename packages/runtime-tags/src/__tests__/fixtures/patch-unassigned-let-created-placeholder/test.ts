import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// An unassigned `<let>` read in a `@placeholder` a patch shows: it shows the client's
// value, not the server's later input.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { show: false, v: "a" },
    { show: true, v: "b", p: resolveAfter("r", 2) },
    wait,
  ],
};
