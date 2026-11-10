import type { TestConfig } from "../../main.test";

// A `<define>`'s content is never a native tag: the attribute tag content it
// renders rides the patch as content, with no bind.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, note: "a" },
    { on: false, note: "b" },
    { on: true, note: "c" },
  ],
};
