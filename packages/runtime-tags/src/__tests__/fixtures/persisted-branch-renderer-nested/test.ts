import type { TestConfig } from "../../main.test";

// A fed renderer inside nested branches constructs with them and
// re-renders while paired.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: false, b: false, tag: "span" },
    { a: true, b: false, tag: "span" },
    { a: true, b: true, tag: "span" },
    { a: true, b: true, tag: "em" },
    { a: false, b: true, tag: "em" },
    { a: true, b: true, tag: "b" },
  ],
};
