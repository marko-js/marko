import type { TestConfig } from "../../main.test";

// A fed renderer inside a branch on a scriptless page constructs from the
// entry and re-renders while paired.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, tag: "div" },
    { show: true, tag: "div" },
    { show: true, tag: "span" },
    { show: false, tag: "span" },
    { show: true, tag: undefined },
    { show: true, tag: "em" },
  ],
};
