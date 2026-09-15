import type { TestConfig } from "../../main.test";

// A hole with no bindings behind it renders once: a patch never re-fills
// it, though a scope the patch creates still takes its value as a seed.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  skip_parity: true,
  skip_fresh_render: true,
  steps: [
    { title: "a", show: false },
    { title: "b", show: false },
    { title: "c", show: true },
  ],
};
