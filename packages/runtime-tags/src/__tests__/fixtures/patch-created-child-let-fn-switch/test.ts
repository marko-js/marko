import type { TestConfig } from "../../main.test";

// A `<let>` a patch creates keeps the function it was seeded with: a later
// patch switching the init leaves it, as a client render does.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { show: false, alt: false, more: false, label: "initial" },
    { show: true, alt: false, more: false, label: "a" },
    { show: true, alt: false, more: true, label: "b" },
    { show: true, alt: false, more: false, label: "c" },
    { show: true, alt: true, more: true, label: "d" },
  ],
};
