import type { TestConfig } from "../../main.test";

// A mixed state-and-server test: neither side may own the selection, and
// the reject must see through core tags' merged attr reads.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
