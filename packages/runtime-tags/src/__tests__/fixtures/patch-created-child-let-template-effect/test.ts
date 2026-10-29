import type { TestConfig } from "../../main.test";

// An effect reads the `<let>` naming the tag: the patch seeds it in the scope
// it creates, as plain writes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
