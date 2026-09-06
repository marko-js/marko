import type { TestConfig } from "../../main.test";

// A loop item's spread patches per item; the effect its set re-attaches
// needs no other channel, so growth constructs with the item shell.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: 1, attrs: { class: "a" } }] },
    {
      items: [
        { id: 1, attrs: { class: "b" } },
        { id: 2, attrs: { title: "two" } },
      ],
    },
    { items: [{ id: 2, attrs: {} }] },
  ],
};
