import type { TestConfig } from "../../main.test";

// Objects that happen to carry a renderer's id key render body-only, like any data.
export const config: TestConfig = {
  steps: [{ debugKey: { id: "x" }, optimizeKey: { a: "x" } }],
};
