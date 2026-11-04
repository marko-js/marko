import type { TestConfig } from "../../main.test";

const error = (status: number) =>
  Object.assign(new Error("SHOWN_message"), { status });

// Structure a created `@catch`'s error selects reads a param: a later patch
// throwing another error keeps the branch the first one selected and updates
// the param, and one rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { label: "a" },
    { error: error(404), label: "b" },
    { error: error(500), label: "c" },
    { label: "d" },
  ],
};
