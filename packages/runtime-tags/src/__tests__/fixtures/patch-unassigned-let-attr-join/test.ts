import type { TestConfig } from "../../main.test";

// An unassigned `<let>` joined with changing input in an attribute.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "a", w: "2" },
  ],
};
