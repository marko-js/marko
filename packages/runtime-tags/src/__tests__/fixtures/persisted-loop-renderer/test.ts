import type { TestConfig } from "../../main.test";

// A fed renderer per loop item re-renders from its entry through growth,
// shrink and an empty list.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ tag: "div" }, { tag: "span" }] },
    { items: [{ tag: "em" }, { tag: "span" }, { tag: "b" }] },
    { items: [{ tag: "i" }] },
    { items: [] },
    { items: [{ tag: "u" }, { tag: "s" }] },
  ],
};
