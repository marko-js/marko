import type { TestConfig } from "../../main.test";

// Rows hand their bodies to a template or a native tag: a row fills only where
// its own body is kept.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      rows: [
        { id: 1, card: true, label: "a" },
        { id: 2, card: false, label: "b" },
        { id: 3, card: false, label: "c" },
      ],
    },
    {
      rows: [
        { id: 1, card: true, label: "d" },
        { id: 2, card: false, label: "e" },
        { id: 3, card: false, label: "f" },
      ],
    },
  ],
};
