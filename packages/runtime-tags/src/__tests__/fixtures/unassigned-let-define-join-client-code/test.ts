import type { TestConfig } from "../../main.test";

// patch-unassigned-let-define-join-client-code without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { id: "u1", name: "a" },
    { id: "u1", name: "b" },
  ],
};
