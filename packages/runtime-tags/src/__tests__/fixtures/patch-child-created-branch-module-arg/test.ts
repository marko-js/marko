import type { TestConfig } from "../../main.test";

// A patch creates the branch holding a call that passes a module function: the
// created scope's init derives it, and no setup envelope carries it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: true },
  ],
};
