import type { TestConfig } from "../../main.test";

const click = (nth: number) => (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[nth].click();
};

// Item-local state: paired items keep client state through patches (and it
// travels with keyed reorders), an added item constructs with its
// server-seeded state, and a removed key comes back fresh.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      items: [
        { id: 1, label: "Apples", start: 0 },
        { id: 2, label: "Bread", start: 0 },
      ],
    },
    click(0),
    {
      items: [
        { id: 2, label: "Bread", start: 0 },
        { id: 1, label: "Apples", start: 0 },
      ],
    },
    {
      items: [
        { id: 2, label: "Bread", start: 0 },
        { id: 3, label: "Milk", start: 5 },
        { id: 1, label: "Apples", start: 0 },
      ],
    },
    click(1),
    {
      items: [
        { id: 2, label: "Bread", start: 0 },
        { id: 1, label: "Apples", start: 0 },
      ],
    },
    {
      items: [
        { id: 2, label: "Bread", start: 0 },
        { id: 3, label: "Milk", start: 5 },
        { id: 1, label: "Apples", start: 0 },
      ],
    },
  ],
};
