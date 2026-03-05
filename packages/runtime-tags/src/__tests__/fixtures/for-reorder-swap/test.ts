import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 4, text: "d" },
      ],
    },
    // Swap first and last: middle items stay, endpoints move
    {
      children: [
        { id: 4, text: "d" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
        { id: 1, text: "a" },
      ],
    },
    // Swap adjacent: b <-> c
    {
      children: [
        { id: 4, text: "d" },
        { id: 3, text: "c" },
        { id: 2, text: "b" },
        { id: 1, text: "a" },
      ],
    },
  ],
};
