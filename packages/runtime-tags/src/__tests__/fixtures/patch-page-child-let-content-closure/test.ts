import type { TestConfig } from "../../main.test";

// A page's content a child holds in its `<let>` reads a value a patch changes:
// its fill registers on its own, so the flush reaches it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
