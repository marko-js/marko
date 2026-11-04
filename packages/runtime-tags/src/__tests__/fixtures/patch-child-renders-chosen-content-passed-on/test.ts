import type { TestConfig } from "../../main.test";

// The page switches the content it hands a child, which passes it on to its own
// child to render: a patch creates the other content from its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: true, label: "one" },
    { a: true, label: "two" },
    { a: false, label: "three" },
    { a: true, label: "four" },
  ],
};
