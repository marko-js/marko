import type { TestConfig } from "../../main.test";

// A `@catch` a patch created reads a param a later patch changes while the
// `<try>` stays caught; a patch rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { msg: "a" },
    { fail: true, msg: "b" },
    { fail: true, msg: "c" },
    { msg: "d" },
  ],
};
