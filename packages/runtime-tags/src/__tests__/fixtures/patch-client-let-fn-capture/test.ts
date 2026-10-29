import type { TestConfig } from "../../main.test";

// A `<let>` holds a function capturing its caller's input: the client calls the
// one it keeps with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { prefix: "old-", label: "a" },
    { prefix: "new-", label: "b" },
  ],
};
