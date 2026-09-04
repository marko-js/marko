import type { TestConfig } from "../../main.test";

// A define rendering itself reaches its own call sites once.
export const config: TestConfig = {
  persisted: true,
  steps: [{ x: "a" }, { x: "b" }],
};
