import type { TestConfig } from "../../main.test";

// An expression-valued client-state test: core tags merge attr reads
// into the tag extra, and the reject must see through the merge.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
