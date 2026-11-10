import type { TestConfig } from "../../main.test";

// A child's script reading a primitive a call spreads from a `<const>` it builds
// re-runs only as that value changes, not as the `<const>`'s other sources do.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", n: 1 },
    { title: "a", n: 2 },
    { title: "b", n: 2 },
  ],
};
