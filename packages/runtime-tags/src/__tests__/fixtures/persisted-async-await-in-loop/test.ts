import type { TestConfig } from "../../main.test";

// A new loop item runs the await initializer from its shell before walking
// the item's Pending/Child partial.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { items: [] },
    { items: [{ id: 1, promise: Promise.resolve("one") }] },
  ],
};
