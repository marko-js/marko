import type { TestConfig } from "../../main.test";

// Nested objects reach the function a `<let>` holds; the client calls it with
// patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ label: "a" }, { label: "b" }],
};
