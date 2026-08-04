import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const items = (...pairs: [number, string][]) =>
  pairs.map(([id, label]) => ({ id, label }));

// A server-driven keyed loop: patches update, append, remove, and reorder
// items (constructing additions from the item shell) while the sibling
// counter's state survives throughout.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", items: items([1, "Apples"], [2, "Bread"]) },
    click,
    { title: "Store", items: items([1, "Apples!"], [2, "Bread"]) },
    { title: "Store", items: items([1, "Apples!"], [2, "Bread"], [3, "Milk"]) },
    click,
    { title: "Store", items: items([3, "Milk"], [1, "Apples!"]) },
    { title: "Store", items: [] },
    click,
    { title: "Store", items: items([2, "Rye"], [3, "Milk"]) },
  ],
};
