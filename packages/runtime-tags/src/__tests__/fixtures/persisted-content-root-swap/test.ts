import type { TestConfig } from "../../main.test";

// A page-root fed renderer delivers as a required fill: an unchanged tag
// stays paired and a change re-renders through the tag signal. Optimize
// shakes the unreferenced signal, so the change rejects there instead
// (fail closed, never stale structure) — asserted debug-only.
export const config: TestConfig = {
  persisted: true,
  skip_optimize: true,
  steps: [{ content: "div" }, { content: "span" }],
};
