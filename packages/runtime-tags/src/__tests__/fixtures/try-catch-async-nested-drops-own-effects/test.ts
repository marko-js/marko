import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The outer body's effect waits apart from the nested body heading the stream,
// and still goes with the outer body when its `@catch` takes its place.
export const config: TestConfig = {
  steps: [{}, flush],
  equivalent: false,
};
