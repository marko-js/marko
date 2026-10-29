import type { TestConfig } from "../../main.test";

// A hole reading a `<let>` itself, not a member: the client keeps its value as
// the init changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: false, label: "c" },
  ],
};
