import type { TestConfig } from "../../main.test";

// A `@catch` the document rendered reads a param beside its error: a patch
// that throws again keeps its message and updates the param, and one
// rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { error: new Error("SHOWN_one"), label: "a" },
    { error: new Error("SHOWN_two"), label: "b" },
    { label: "c" },
  ],
};
