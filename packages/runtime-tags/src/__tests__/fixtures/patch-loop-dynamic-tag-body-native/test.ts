import type { TestConfig } from "../../main.test";
// A row's body rendered natively takes its row's value through its hole alone:
// no fill ships for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      wrap: false,
      rows: [
        { id: 1, label: "a" },
        { id: 2, label: "b" },
      ],
    },
    {
      wrap: false,
      rows: [
        { id: 1, label: "c" },
        { id: 2, label: "d" },
      ],
    },
  ],
};
