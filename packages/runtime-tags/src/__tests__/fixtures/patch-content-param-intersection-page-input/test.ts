import type { TestConfig } from "../../main.test";

// Content a child renders with an argument it intersects with a page input, on a page
// whose bundle holds the content: the patch writes the hole and hands no argument.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a1", b: "b1", obj: { x: "x1" } },
    { a: "a2", b: "b2", obj: { x: "x1" } },
    { a: "a2", b: "b2", obj: { x: "x2" } },
    { a: "a3", b: "b3", obj: { x: "x3" } },
  ],
};
