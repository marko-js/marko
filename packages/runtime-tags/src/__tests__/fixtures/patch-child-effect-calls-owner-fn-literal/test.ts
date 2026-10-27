import type { TestConfig } from "../../main.test";
// A child's script calls a function literal its caller passes, which reads the
// caller's input: the script's entry depends on that input's write, so a patch
// changing it re-runs the script, and only then.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
