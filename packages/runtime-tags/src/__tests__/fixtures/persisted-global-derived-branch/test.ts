import type { TestConfig } from "../../main.test";

// A branch selected by a server value derived from `$global` (a per-render
// collector) is server-owned: each flush ships the branch as rendered.
export const config: TestConfig = {
  persisted: true,
  steps: [{ items: ["a"] }, { items: ["a", "b"] }, { items: [] }],
};
