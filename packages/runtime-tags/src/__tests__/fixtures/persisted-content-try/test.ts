import type { TestConfig } from "../../main.test";

// A content body holding a `<try>` constructs the boundary from its content
// record when the fed renderer builds it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
