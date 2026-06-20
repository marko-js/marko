import type { TestConfig } from "../../main.test";

// `to` is inclusive and `until` is exclusive; a fractional `step` must not
// drop the `to` endpoint nor include the `until` endpoint despite IEEE-754
// rounding of `(to - from) / step`.
export const config: TestConfig = {
  steps: [],
};
