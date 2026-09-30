import type { TestConfig } from "../../main.test";

// `by=` reads the outer `key`, which the loop parameter only shadows in the body.
export const config: TestConfig = {
  steps: [{ items: [{ id: "a" }, { id: "b" }] }],
};
