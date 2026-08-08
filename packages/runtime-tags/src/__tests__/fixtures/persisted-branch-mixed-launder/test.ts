import type { TestConfig } from "../../main.test";

// A state-mixed derived recomputes client-side, so its param origins
// must fill: a computed grain hidden behind it still fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
