import type { TestConfig } from "../../main.test";
// patch-effect-reads-bound-fn without patches: the client re-creates
// `getTitle` only when the input changes, and the script runs with it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
