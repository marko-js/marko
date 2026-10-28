import type { TestConfig } from "../../main.test";

// Server-driven `<if>` and unkeyed `<for>` in one patch template: items
// pair positionally, and the walk-less static branch round-trips through
// its bare shell id (staying shown pairs by selection; a re-show after
// hiding constructs it).
export const config: TestConfig = {
  patches: true,
  steps: [
    { name: "world", show: true, items: [1, 2] },
    { name: "marko", show: true, items: [1, 2, 3] },
    { name: "marko", show: false, items: [3] },
    { name: "mark", show: true, items: [3] },
  ],
};
