import type { TestConfig } from "../../main.test";

// A template named through an object holding a `<let>`'s template: the client
// renders it with each patch's input.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, { label: "c" }],
};
