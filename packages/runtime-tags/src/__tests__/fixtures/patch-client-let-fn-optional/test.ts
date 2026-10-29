import type { TestConfig } from "../../main.test";

// A `<let>` holds a function or null, called optionally with patched input; the
// client keeps the one it was created with as the init switches.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
