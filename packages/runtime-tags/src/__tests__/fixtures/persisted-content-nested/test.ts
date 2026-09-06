import type { TestConfig } from "../../main.test";

// A body handed down two levels (`content=input.content`) to the grandchild
// that renders it: its hole patch-writes through the nested branch links.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
  ],
};
