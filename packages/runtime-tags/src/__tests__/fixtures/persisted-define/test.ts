import type { TestConfig } from "../../main.test";

// A `<define>` renderer pairs as a content child; class/style expressions
// patch as normalized attribute strings.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", n: 1, cls: "c1", on: true, color: "red" },
    { title: "b", n: 2, cls: "c2", on: false, color: "blue" },
  ],
};
