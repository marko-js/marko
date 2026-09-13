import type { TestConfig } from "../../main.test";

// The child renders its content through a destructured alias of `input`:
// the reference bindings, not the syntax, make it a content render tag.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
    { title: "c", note: "z" },
  ],
};
