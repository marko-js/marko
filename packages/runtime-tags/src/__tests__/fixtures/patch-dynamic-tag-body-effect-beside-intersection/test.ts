import type { TestConfig } from "../../main.test";

// An effect and an intersection with state read a page input in a dynamic tag's body,
// beside an intersection of two inputs: the patch renders that one, the client the others.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "div", a: "a1", b: "b1" },
    { tag: "div", a: "a2", b: "b1" },
    { tag: "div", a: "a2", b: "b2" },
    { tag: null, a: "a3", b: "b3" },
  ],
};
