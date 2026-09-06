import type { TestConfig } from "../../main.test";

const ack = (document: Document) => {
  document.querySelector<HTMLButtonElement>("footer button")!.click();
};

const items = (...entries: [number, string, boolean?][]) =>
  entries.map(([id, label, sale]) => ({ id, label, sale }));

// Nested structure at every level the walk supports: conditionals inside
// keyed loop items (pairing, hiding, and constructing per item), a
// conditional inside a conditional (constructing both levels at once), and
// a stateful custom tag after the loop whose client state must survive.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: items([1, "Apples"], [2, "Bread", true]), badge: "new" },
    ack,
    {
      items: items([3, "Milk", true], [1, "Apples"], [2, "Bread"]),
      summary: "2 deals",
      badge: "hot",
    },
    {
      items: items([3, "Milk"], [2, "Bread", true]),
      summary: "1 deal",
      detail: "ends soon",
      badge: "hot",
    },
    { items: items([2, "Bread", true]), badge: "sold" },
  ],
};
