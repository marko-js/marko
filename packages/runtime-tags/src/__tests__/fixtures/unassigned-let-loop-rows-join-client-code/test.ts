import type { TestConfig } from "../../main.test";

// patch-unassigned-let-loop-rows-join-client-code without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { id: "u1", items: ["x"] },
    { id: "u1", items: ["x", "y"] },
    { id: "u1", items: ["y", "z"] },
  ],
};
