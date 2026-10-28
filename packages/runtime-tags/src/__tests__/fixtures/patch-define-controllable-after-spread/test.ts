import type { TestConfig } from "../../main.test";

// A `<define>` body spreads rest attrs before a complete controllable: its
// locals write with the body's scope, once its group's reason is in scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { hint: "a", v: "x" },
    { hint: "b", v: "y" },
  ],
};
