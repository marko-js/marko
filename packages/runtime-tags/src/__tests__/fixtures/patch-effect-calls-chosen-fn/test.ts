import type { TestConfig } from "../../main.test";
// A script calls the live function an input chooses: its entry depends on the
// choice and on what the functions capture, so it runs once per change of
// either, and a patch re-sending the same choice binds nothing.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", upper: false },
    { title: "a", upper: true },
    { title: "b", upper: true },
    { title: "b", upper: true },
  ],
};
