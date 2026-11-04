import type { TestConfig } from "../../main.test";

// A `<define>` body's script reading its param re-runs when a patch changes it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, { label: "c" }],
};
