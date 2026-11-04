import type { TestConfig } from "../../main.test";

// Effects in an `<if>`, a `<for>` and content a created `@catch` holds mount from its
// shells, as no patch pairs them; a caught `<try>` keeps its first error, and a
// patch rendering its body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  skip_fresh_render: true,
  steps: [
    { msg: "a", show: true, items: [1], v: 1 },
    { fail: true, msg: "b", show: true, items: [1], v: 1 },
    { fail: true, msg: "c", show: true, items: [1, 2], v: 2 },
    { msg: "d", show: true, items: [1], v: 3 },
  ],
};
