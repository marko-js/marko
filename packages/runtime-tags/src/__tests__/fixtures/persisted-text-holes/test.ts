import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "First", body: "one" }],
  patch_input: { title: "Second", body: "two" },
};
