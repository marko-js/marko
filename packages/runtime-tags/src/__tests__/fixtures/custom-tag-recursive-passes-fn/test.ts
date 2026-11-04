import type { TestConfig } from "../../main.test";
// patch-custom-tag-recursive-passes-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
