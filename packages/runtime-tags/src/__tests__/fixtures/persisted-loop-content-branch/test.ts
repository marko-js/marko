import type { TestConfig } from "../../main.test";

// Per-item content bodies with nested branches: grow, shrink, flip arms.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      items: [
        { t: "a", n: "1", alt: false },
        { t: "b", n: "2", alt: true },
      ],
    },
    {
      items: [
        { t: "a", n: "11", alt: true },
        { t: "b", n: "22", alt: false },
        { t: "c", n: "3", alt: false },
      ],
    },
    { items: [{ t: "c", n: "33", alt: true }] },
    {
      items: [
        { t: "x", n: "9", alt: false },
        { t: "y", n: "8", alt: true },
      ],
    },
  ],
};
