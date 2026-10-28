import type { TestConfig } from "../../main.test";

// A controlled `<let>` joined with changing input follows its controller.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
