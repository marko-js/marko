import type { TestConfig } from "../../main.test";

// Each script reads a different `<define>` param with the same constant, which
// no scope subscribes to: the body's groups are its params' own.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a", b: "b" },
    { a: "A", b: "b" },
    { a: "A", b: "B" },
  ],
};
