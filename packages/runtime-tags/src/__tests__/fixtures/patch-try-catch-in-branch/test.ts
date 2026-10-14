import type { TestConfig } from "../../main.test";

// A `<try>` with no await inside a branch: the branch's creation carries the
// try body's payload; a throw shows the `@catch`, which the next patch keeps,
// and hiding then showing the branch rebuilds the try with its body.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { show: false },
    { show: true, message: "ok" },
    { show: true, message: "x", boom: true },
    { show: true, message: "back" },
    { show: false },
    { show: true, message: "again" },
  ],
};
