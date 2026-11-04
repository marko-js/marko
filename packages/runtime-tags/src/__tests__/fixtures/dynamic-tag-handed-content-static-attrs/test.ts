import type { TestConfig } from "../../main.test";

// A child renders the content it is handed with a constant attribute: the
// renderer changes by the tag's own group, so the tag takes no group of its own.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ y: "y" }, { y: "z" }],
};
