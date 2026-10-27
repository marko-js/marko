import type { TestConfig } from "../../main.test";

// A child rendering a live function it joins with `null` re-renders by its captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
