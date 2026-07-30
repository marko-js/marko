import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
  steps: [{ href: "/first", label: "First" }],
};
