import type { TestConfig } from "../../main.test";
// A script calls a function whose captures follow an input: its entry depends
// on that input, so a patch changing it runs the script again, and only then.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
