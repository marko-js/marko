import type { TestConfig } from "../../main.test";

// A flush whose try body renders without error and writes nothing leaves the
// `@catch` an earlier flush showed.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ boom: false }, { boom: true }, { boom: false }],
};
