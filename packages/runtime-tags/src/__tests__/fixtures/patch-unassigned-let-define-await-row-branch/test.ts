import type { TestConfig } from "../../main.test";

// An `<await>` in a definition called in each row's branch a page's own unassigned
// `<let>` shows: its body takes later input.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: true, v: "a", w: "1", items: ["a", "b"] },
    { show: false, v: "b", w: "2", items: ["c"] },
    { show: true, v: "c", w: "3", items: ["d", "e"] },
  ],
};
