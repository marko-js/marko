import type { TestConfig } from "../../main.test";

// A content body per loop item, reading the item, through growth, shrink
// and an empty list.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ text: "a" }, { text: "b" }] },
    { items: [{ text: "c" }, { text: "b" }, { text: "d" }] },
    { items: [{ text: "e" }] },
    { items: [] },
    { items: [{ text: "f" }, { text: "g" }] },
  ],
};
