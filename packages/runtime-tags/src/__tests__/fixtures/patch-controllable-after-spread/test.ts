import type { TestConfig } from "../../main.test";

// A spread before a complete controllable: the controllable stays static
// (its own control/bind entries), not merged into the attribute set.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", attrs: { title: "t" } },
    { v: "b", attrs: { title: "u" } },
  ],
};
