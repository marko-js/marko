import type { TestConfig } from "../../main.test";

// A dynamic tag with a tag variable: the entry re-renders the site and the
// variable's registration receives the new return.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { which: true, a: "a" },
    { which: true, a: "b" },
    { which: false, a: "c" },
  ],
};
