import type { TestConfig } from "../../main.test";

// A spread on an attr tag may carry any property of its group: a
// provenance-free spread value gates the structural group it feeds.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
