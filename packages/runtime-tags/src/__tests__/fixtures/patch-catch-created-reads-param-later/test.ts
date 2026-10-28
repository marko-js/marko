import type { TestConfig } from "../../main.test";

// A `@catch` a patch created reads a param a later patch changes while the
// `<try>` stays caught.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ msg: "a" }, { fail: true, msg: "b" }, { msg: "c" }],
};
