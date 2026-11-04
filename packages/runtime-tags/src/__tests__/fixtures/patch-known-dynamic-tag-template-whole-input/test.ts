import type { TestConfig } from "../../main.test";

// A dynamic tag's known template that reads its input whole: what it does with
// the whole input says where a template passed in it goes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { framed: true, label: "a" },
    { framed: true, label: "b" },
    { framed: false, label: "c" },
    { framed: true, label: "d" },
  ],
};
