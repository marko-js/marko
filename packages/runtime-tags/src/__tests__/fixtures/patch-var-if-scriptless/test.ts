import type { TestConfig } from "../../main.test";

// A scriptless page's patch creates a branch holding a child's tag var: the
// var only feeds server-rendered html, so the flush seeds nothing for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    { show: true, label: "b" },
  ],
};
