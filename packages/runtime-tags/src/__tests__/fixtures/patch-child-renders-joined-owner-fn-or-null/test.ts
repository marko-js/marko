import type { TestConfig } from "../../main.test";

// A child rendering a function with written captures it joins with `null` re-renders by its captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
