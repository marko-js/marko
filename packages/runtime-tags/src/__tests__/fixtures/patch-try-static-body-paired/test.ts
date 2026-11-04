import type { TestConfig } from "../../main.test";

// Tries whose bodies are static still resume on a patch page, so the entry
// each flush sends for them pairs rather than creating.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a" }, { x: "b" }, { x: "c" }],
};
