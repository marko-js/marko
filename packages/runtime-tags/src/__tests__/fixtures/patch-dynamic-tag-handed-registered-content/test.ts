import type { TestConfig } from "../../main.test";

// Content handed to a child, which the page registers: a patch naming it again
// leaves the live branch to the branch's own entries.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: true, label: "one" },
    { a: true, label: "two" },
    { a: false, label: "three" },
    { a: true, label: "two" },
  ],
};
