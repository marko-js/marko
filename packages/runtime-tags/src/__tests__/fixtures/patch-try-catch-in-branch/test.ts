import type { TestConfig } from "../../main.test";

// A `<try>` with no await inside a branch: the branch's creation carries the
// try body's payload; a throw shows the `@catch`, hiding then showing the
// branch rebuilds the try with its body, and a patch rendering a caught try's
// body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { show: false },
    { show: true, message: "ok" },
    { show: true, message: "x", boom: true },
    { show: false },
    { show: true, message: "again" },
    { show: true, message: "y", boom: true },
    { show: true, message: "back" },
  ],
};
