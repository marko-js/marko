import type { TestConfig } from "../../main.test";
// Content a `<let>` holds sits beside registered content reading the same closure:
// both render on the client and follow a patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { open: true, label: "a" },
    { open: true, label: "b" },
  ],
};
