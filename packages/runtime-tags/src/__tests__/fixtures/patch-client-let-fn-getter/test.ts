import type { TestConfig } from "../../main.test";

// A getter returns the function a `<let>` holds; the client calls it with
// patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
