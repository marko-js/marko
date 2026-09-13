import type { TestConfig } from "../../main.test";

// A dynamic tag swapping a component for a native tag name keeps its body:
// the body is a branch of the native tag's scope and pairs like one.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { wrap: true, x: "a" },
    { wrap: false, x: "b" },
    { wrap: false, x: "c" },
    { wrap: true, x: "d" },
  ],
};
