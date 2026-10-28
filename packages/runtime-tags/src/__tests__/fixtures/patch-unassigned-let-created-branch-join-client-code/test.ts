import type { TestConfig } from "../../main.test";

// An unassigned `<let>` joined with changing input in a branch a patch creates, on
// a page with client code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { id: "u1", show: false, name: "a" },
    { id: "u1", show: true, name: "b" },
    { id: "u1", show: true, name: "c" },
  ],
};
