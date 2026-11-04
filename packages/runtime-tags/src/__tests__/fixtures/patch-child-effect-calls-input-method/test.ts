import type { TestConfig } from "../../main.test";
// A child's script calling a method of its input reads the input whole: the object
// the call builds goes as a plain write, its entry depending on what it holds.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
