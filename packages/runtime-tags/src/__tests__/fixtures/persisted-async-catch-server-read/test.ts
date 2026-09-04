import type { TestConfig } from "../../main.test";

// A scriptless `<@catch>` renders server-side per rejection frame, so its
// request reads are current at materialization.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { promise: Promise.resolve("ok"), title: "first" },
    { promise: Promise.reject(new Error("boom")), title: "second" },
  ],
};
