import type { TestConfig } from "../../main.test";

// A child rendering one of two live functions it joins re-renders by their captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
