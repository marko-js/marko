import type { TestConfig } from "../../main.test";

// Define content a held `<let>` names, first rendered by a patch that also
// changes the input it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
  ],
};
