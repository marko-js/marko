import type { TestConfig } from "../../main.test";

// A hole reading a held `<let>` itself, in a child a patch creates: the server
// renders it with the created scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, more: true, label: "a" },
    { show: true, more: true, label: "b" },
    { show: true, more: false, label: "c" },
    { show: true, more: true, label: "d" },
  ],
};
