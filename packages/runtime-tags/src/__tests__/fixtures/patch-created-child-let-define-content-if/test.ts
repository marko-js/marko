import type { TestConfig } from "../../main.test";

// patch-created-child-let-define-content, a branch inside the content: its own
// instance subscribes too, so it keeps its holes current.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    { show: true, label: "d" },
  ],
};
