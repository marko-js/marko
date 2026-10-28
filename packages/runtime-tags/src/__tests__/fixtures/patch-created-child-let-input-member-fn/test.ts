import type { TestConfig } from "../../main.test";

// A created child reads one attribute by name and holds its whole input in
// a `<let>` seeding only the function member: the function registers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
