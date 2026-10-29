import type { TestConfig } from "../../main.test";

// A `<let>` whose init switches template: the client keeps the first, as a
// client render does.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { show: true, big: false, label: "a" },
    { show: true, big: false, label: "b" },
    { show: true, big: true, label: "c" },
  ],
};
