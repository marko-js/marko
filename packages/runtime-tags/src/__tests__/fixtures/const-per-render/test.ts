import type { TestConfig } from "../../main.test";

// A `<const>` whose value differs per render, joined with input, that no client
// code reads.
export const config: TestConfig = {
  steps: [{ name: "a", label: "A", value: "1" }],
};
