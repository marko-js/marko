import type { TestConfig } from "../../main.test";

// A branch a patch reveals holds an await whose value is already settled
// (a plain value, then a resolved promise): the construct still gets its
// body.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, label: "a" },
    { show: true, label: "b", value: "x" },
    { show: false, label: "c" },
    { show: true, label: "d", value: Promise.resolve("y") },
  ],
};
