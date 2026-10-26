import type { TestConfig } from "../../main.test";

// A `@catch` the document rendered reads a param beside its error: patches
// that throw again or render the body keep its message and update the param.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { error: new Error("SHOWN_one"), label: "a" },
    { error: new Error("SHOWN_two"), label: "b" },
    { label: "c" },
  ],
};
