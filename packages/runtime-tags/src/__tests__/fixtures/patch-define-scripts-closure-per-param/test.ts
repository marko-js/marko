import type { TestConfig } from "../../main.test";

// Each script reads a different `<define>` param with the same template input:
// each re-runs when a patch changes what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a", b: "b", c: 1 },
    { a: "A", b: "b", c: 1 },
    { a: "A", b: "B", c: 1 },
    { a: "A", b: "B", c: 2 },
  ],
};
