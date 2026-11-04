import type { TestConfig } from "../../main.test";

// The page switches the content it hands a child, which renders it: a patch
// creates the other content from its shell, as the page bundles neither.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: true, label: "one" },
    { a: true, label: "two" },
    { a: false, label: "three" },
    { a: true, label: "four" },
  ],
};
