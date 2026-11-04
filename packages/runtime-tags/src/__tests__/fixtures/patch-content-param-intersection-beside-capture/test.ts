import type { TestConfig } from "../../main.test";

// Content a child renders with an argument a function captures and an intersection
// reads with a page input: the patch hands the argument and writes the input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a1", obj: { x: "x1" } },
    { a: "a2", obj: { x: "x1" } },
    { a: "a2", obj: { x: "x2" } },
  ],
};
