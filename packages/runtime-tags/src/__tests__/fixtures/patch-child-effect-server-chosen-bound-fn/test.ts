import type { TestConfig } from "../../main.test";

// A child's effect reads a scope-bound function the server picks: the patch writes
// it as a marked bind, which the page links where it both marks and binds.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "1", pick: true },
    { x: "2", pick: false },
    { x: "3", pick: false },
  ],
};
