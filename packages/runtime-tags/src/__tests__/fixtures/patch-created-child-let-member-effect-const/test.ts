import type { TestConfig } from "../../main.test";

// An effect reading a member of a `<let>` with a constant initial value runs once in
// a child a patch creates, which no caller's init sets: the `<let>` takes no fill.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: true }, { show: true }],
};
