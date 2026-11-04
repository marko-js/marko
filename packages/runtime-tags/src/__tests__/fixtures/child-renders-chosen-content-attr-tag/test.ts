import type { TestConfig } from "../../main.test";

// The page switches the content an attribute tag hands a child, which renders it:
// a patch creates the other content from its shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: true, label: "one" },
    { a: true, label: "two" },
    { a: false, label: "three" },
    { a: true, label: "four" },
  ],
};
