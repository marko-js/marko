import type { TestConfig } from "../../main.test";

// A patch that omits `o` (its serialized globals vary by request) leaves the
// page's `o`, so the script reading `o.x` does not run again.
export const config: TestConfig = {
  patches: true,
  // The script's appends are state a fresh page would not have.
  skip_fresh_render: true,
  steps: [
    { $global: { o: { x: "a" }, k: "k", serializedGlobals: ["o", "k"] } },
    { $global: { o: { x: "b" }, k: "l", serializedGlobals: ["k"] } },
  ],
};
