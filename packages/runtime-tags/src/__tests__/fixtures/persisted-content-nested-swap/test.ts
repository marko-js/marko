import type { TestConfig } from "../../main.test";

// A fed renderer below the root re-renders from its selection entry, and
// constructs with the branch that shows it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, content: "div" },
    { show: true, content: "div" },
    { show: true, content: "div" },
    { show: true, content: "span" },
  ],
};
