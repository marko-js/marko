import type { TestConfig } from "../../main.test";

// A native tag's attribute tag content rides the dynamic tag entry's input,
// bound as the patch applies.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      items: [
        { key: "a", on: true },
        { key: "b", on: false },
      ],
    },
    {
      items: [
        { key: "b", on: false },
        { key: "c", on: true },
      ],
    },
  ],
};
