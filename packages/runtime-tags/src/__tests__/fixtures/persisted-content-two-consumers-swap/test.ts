import type { TestConfig } from "../../main.test";

// Same body section id served to two cards; construct the second while the
// first pairs, then update the shared hole.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { t1: "a", t2: "b", note: "x", show: false },
    { t1: "a", t2: "b", note: "x", show: true },
    { t1: "c", t2: "d", note: "y", show: true },
    { t1: "c", t2: "d", note: "z", show: false },
    { t1: "e", t2: "f", note: "w", show: true },
  ],
};
