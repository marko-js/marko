import type { TestConfig } from "../../main.test";

// A `<let>` holds an object whose function the init switches: the client keeps
// the first and calls it with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
