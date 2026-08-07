import type { TestConfig } from "../../main.test";

// A mixed state-and-server expression test: pure state would be
// client-owned, but a server contribution means neither side may own the
// selection — and core tags merge attr reads into the tag extra, so the
// reject must see through the merge.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
