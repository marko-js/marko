import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
        { id: 5, text: "e" },
      ],
    },
    // Full reverse: optimal is to keep the longest subsequence in place
    {
      children: [
        { id: 5, text: "e" },
        { id: 4, text: "d" },
        { id: 3, text: "c" },
        { id: 2, text: "b" },
        { id: 1, text: "a" },
      ],
    },
    // Back to original
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
        { id: 5, text: "e" },
      ],
    },
  ],
};
