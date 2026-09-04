import type { TestConfig } from "../../main.test";

// A scriptless await body holding a child tag variable constructs from its
// shipped record; the variable's write-back wires the child.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
