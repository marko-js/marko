import type { TestConfig } from "../../main.test";

// Body always present but its inner branch toggles; paired root content
// identity stays, branch constructs/tears down.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", show: false, note: "x" },
    { title: "b", show: true, note: "x" },
    { title: "c", show: true, note: "y" },
    { title: "d", show: false, note: "y" },
    { title: "e", show: true, note: "z" },
  ],
};
