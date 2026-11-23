import type { TestConfig } from "../../main.test";

// The client splits a toggled class on single spaces, so debug builds throw
// as it toggles a style import read spaced otherwise.
export const config: TestConfig = {
  steps: [{ on: true }],
  error_dom: true,
  skip_optimize: true,
};
