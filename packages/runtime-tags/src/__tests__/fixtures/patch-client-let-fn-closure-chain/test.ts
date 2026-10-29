import type { TestConfig } from "../../main.test";

// Two closures chain to the function a `<let>` holds; the client calls them
// with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ label: "a" }, { label: "b" }],
};
