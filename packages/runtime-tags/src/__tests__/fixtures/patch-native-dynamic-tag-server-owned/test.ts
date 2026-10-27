import type { TestConfig } from "../../main.test";

// A native dynamic tag the server fully owns, on an interactive page: the
// patch names its unregistered body, which ships as a shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "one", on: true },
    { label: "two", on: true },
    { label: "three", on: false },
    { label: "four", on: true },
  ],
};
