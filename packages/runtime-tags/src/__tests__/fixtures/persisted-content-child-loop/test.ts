import type { TestConfig } from "../../main.test";

// A dynamic body a child renders per loop item: paired items patch the
// hole and growth constructs from the body's content record.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { count: [1, 2], note: "x" },
    { count: [1, 2], note: "y" },
    { count: [1], note: "z" },
    { count: [1, 2, 3], note: "w" },
  ],
};
