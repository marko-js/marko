import type { TestConfig } from "../../main.test";

// Rows a paired child's loop creates mount the effect their caller feeds from
// request data once each, from the entry that re-runs it on a paired row.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [] },
    { items: [{ name: "a" }, { name: "b" }, { name: "c" }] },
    { items: [{ name: "a" }, { name: "B" }, { name: "c" }] },
  ],
};
