import type { TestConfig } from "../../main.test";

// A page-root fed renderer re-renders from its selection entry: an
// unchanged tag stays paired and a change swaps the element.
export const config: TestConfig = {
  persisted: true,
  steps: [{ content: "div" }, { content: "div" }, { content: "span" }],
};
