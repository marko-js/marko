import type { TestConfig } from "../../main.test";

// A destructured input a function passed to a child captures, declared by its
// own name where that function shadows `input`.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
