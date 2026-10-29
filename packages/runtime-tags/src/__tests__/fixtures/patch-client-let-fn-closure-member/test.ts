import type { TestConfig } from "../../main.test";

// A closure calls a member function of the object a `<let>` holds, with patched
// input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
