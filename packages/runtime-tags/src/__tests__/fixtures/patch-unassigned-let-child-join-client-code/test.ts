import type { TestConfig } from "../../main.test";

// A child's unassigned `<let>` joined with changing input, on a page with client
// code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { id: "u1", name: "a" },
    { id: "u1", name: "b" },
  ],
};
