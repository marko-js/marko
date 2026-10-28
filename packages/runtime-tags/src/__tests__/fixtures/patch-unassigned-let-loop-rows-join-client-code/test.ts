import type { TestConfig } from "../../main.test";

// An unassigned `<let>` joined with each loop row's item while rows are created, on
// a page with client code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { id: "u1", items: ["x"] },
    { id: "u1", items: ["x", "y"] },
    { id: "u1", items: ["y", "z"] },
  ],
};
