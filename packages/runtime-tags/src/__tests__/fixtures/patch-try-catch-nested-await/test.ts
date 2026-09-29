import type { TestConfig } from "../../main.test";

// An await inside an await inside a caught `<try>`: after the catch, the
// rebuilt body creates the outer await, whose body creates the inner.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    { a: Promise.reject(new Error("boom")), b: Promise.resolve("b2") },
    { a: Promise.resolve("a3"), b: Promise.resolve("b3") },
  ],
};
