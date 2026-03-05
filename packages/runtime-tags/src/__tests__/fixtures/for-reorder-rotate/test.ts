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
    // Rotate right by 1: move last to first
    {
      children: [
        { id: 5, text: "e" },
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
      ],
    },
    // Rotate left by 1: move first to last
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
        { id: 5, text: "e" },
      ],
    },
    // Rotate right by 2
    {
      children: [
        { id: 4, text: "d" },
        { id: 5, text: "e" },
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
      ],
    },
  ],
};
