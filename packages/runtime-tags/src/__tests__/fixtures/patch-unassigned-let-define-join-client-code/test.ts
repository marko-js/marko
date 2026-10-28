import type { TestConfig } from "../../main.test";

// An unassigned `<let>` joined with a `<define>` body's changing param, on a page
// with client code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { id: "u1", name: "a" },
    { id: "u1", name: "b" },
  ],
};
