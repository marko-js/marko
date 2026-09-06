import type { TestConfig } from "../../main.test";

// A dynamic body per loop item: paired items patch the hole and growth
// constructs an item from the body's content record.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      items: [
        { t: "a", n: "1" },
        { t: "b", n: "2" },
      ],
    },
    {
      items: [
        { t: "c", n: "3" },
        { t: "b", n: "4" },
      ],
    },
    { items: [{ t: "f", n: "6" }] },
    {
      items: [
        { t: "c", n: "3" },
        { t: "b", n: "4" },
        { t: "e", n: "5" },
      ],
    },
  ],
};
