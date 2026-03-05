import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
      ],
    },
    // Insert in middle: no moves needed, only insert
    {
      children: [
        { id: 1, text: "a" },
        { id: 4, text: "x" },
        { id: 2, text: "b" },
        { id: 5, text: "y" },
        { id: 3, text: "c" },
      ],
    },
    // Insert at start and end
    {
      children: [
        { id: 6, text: "!" },
        { id: 1, text: "a" },
        { id: 4, text: "x" },
        { id: 2, text: "b" },
        { id: 5, text: "y" },
        { id: 3, text: "c" },
        { id: 7, text: "?" },
      ],
    },
  ],
};
