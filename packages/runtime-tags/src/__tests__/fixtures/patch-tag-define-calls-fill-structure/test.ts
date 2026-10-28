import type { TestConfig } from "../../main.test";

// A live function's fill gates on a <define> body's <if>, whose param two calls map
// to two inputs, so the fill asks the merged set (R137's class, third path).
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "A", x: true, y: false },
    { a: "B", x: false, y: true },
    { a: "C", x: true, y: true },
  ],
};
