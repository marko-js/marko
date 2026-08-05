import type { TestConfig } from "../../main.test";

// A root fill read two branches deep fails closed at compile time until
// the composed owner-to-branch dispatch chain lands.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
