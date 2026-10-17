import type { TestConfig } from "../../main.test";

// A native dynamic tag's body reads its input only through a derived value: a
// patch renaming the tag creates the body from its shell and fills the text.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "div", a: "x" },
    { tag: "section", a: "y" },
  ],
};
