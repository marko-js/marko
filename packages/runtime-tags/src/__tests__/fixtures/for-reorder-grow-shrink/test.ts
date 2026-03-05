import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    // Start empty
    { children: [] as { id: number; text: string }[] },
    // Grow to single item
    { children: [{ id: 1, text: "a" }] },
    // Grow to multiple
    {
      children: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" },
      ],
    },
    // Shrink to single (keep middle)
    { children: [{ id: 2, text: "b" }] },
    // Grow again with mix of old and new
    {
      children: [
        { id: 4, text: "d" },
        { id: 2, text: "b" },
        { id: 5, text: "e" },
      ],
    },
    // Shrink to empty
    { children: [] as { id: number; text: string }[] },
    // Grow from empty to multiple
    {
      children: [
        { id: 6, text: "f" },
        { id: 7, text: "g" },
      ],
    },
  ],
};
