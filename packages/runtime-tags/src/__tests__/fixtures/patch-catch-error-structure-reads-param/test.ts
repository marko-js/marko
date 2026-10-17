import type { TestConfig } from "../../main.test";

const error = (status: number) =>
  Object.assign(new Error("SHOWN_message"), { status });

// Structure a created `@catch`'s error selects reads a param: a later patch
// throwing another error keeps the branch the first one selected, and both
// it and one rendering the body update the param.
export const config: TestConfig = {
  patches: true,
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
