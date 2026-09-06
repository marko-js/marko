import type { TestConfig } from "../../main.test";

// `multiple=` is a plain attribute: the select's control MODE derives
// from the value's shape (array = multi), so a server flip patches the
// attribute and the control apply re-selects from the new shape.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", many: false, choice: "a" },
    { title: "Store!", many: true, choice: ["a", "b"] },
  ],
};
