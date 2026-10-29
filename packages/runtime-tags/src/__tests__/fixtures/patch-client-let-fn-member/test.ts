import type { TestConfig } from "../../main.test";

// A `<let>` holds an object whose function a hole calls with patched input: the
// client runs the call, and the patch sends only the input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
