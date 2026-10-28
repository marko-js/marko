import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      rows: [
        { id: 1, card: true, label: "d" },
        { id: 2, card: false, label: "e" },
        { id: 3, card: false, label: "f" },
      ],
    },
  ],
};
