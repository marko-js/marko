import type { TestConfig } from "../../main.test";

// A hole reading a held `<let>` itself, not a member: the server renders it, as
// the page holds no value of it for client code to read.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: false, label: "c" },
  ],
};
