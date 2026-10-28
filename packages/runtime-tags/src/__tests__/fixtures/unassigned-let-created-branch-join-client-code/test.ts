import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-join-client-code without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { id: "u1", show: false, name: "a" },
    { id: "u1", show: true, name: "b" },
    { id: "u1", show: true, name: "c" },
  ],
};
