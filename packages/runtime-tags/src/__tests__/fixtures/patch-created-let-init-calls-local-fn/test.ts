import type { TestConfig } from "../../main.test";

// A `<let>` whose initial value calls a local function: a flush creating its
// scope seeds it, and names no init for the join only that initial value reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
  ],
};
