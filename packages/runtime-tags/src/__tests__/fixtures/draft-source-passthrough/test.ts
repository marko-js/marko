import type { TestConfig } from "../../main.test";

// With no transaction holding an assignment a `<draft>` renders exactly as its
// source, so source updates flow straight through like a `<const>`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: ["a", "b"] }, { items: ["a", "b", "c"] }, { items: ["x"] }],
};
