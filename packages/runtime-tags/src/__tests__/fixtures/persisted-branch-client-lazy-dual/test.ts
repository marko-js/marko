import type { TestConfig } from "../../main.test";

// Two deep client-owned positions reading one server value would
// cross-render (lazy joins dispatch to every scope): fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
