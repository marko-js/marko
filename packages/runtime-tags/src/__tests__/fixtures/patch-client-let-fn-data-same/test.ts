import type { TestConfig } from "../../main.test";

// A `<let>` holds a function beside data the init keeps equal; the client
// renders the call with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
