import type { TestConfig } from "../../main.test";

// patch-child-renders-joined-owner-fn-or-null without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
