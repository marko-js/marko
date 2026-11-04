import type { TestConfig } from "../../main.test";

// An object built under a type assertion: its script depends on its sources.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
