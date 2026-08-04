import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Stateful branch nested in a loop item: pairing reaches through both
// levels (client notes survive item patches), toggling the inner branch
// constructs/destroys it, and a freshly added item constructs its inner
// branch along with it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: [{ id: 1, label: "Apples", detailed: true }] },
    click,
    { items: [{ id: 1, label: "Fuji Apples", detailed: true }] },
    { items: [{ id: 1, label: "Fuji Apples", detailed: false }] },
    { items: [{ id: 1, label: "Fuji Apples", detailed: true }] },
    {
      items: [
        { id: 2, label: "Milk", detailed: true },
        { id: 1, label: "Fuji Apples", detailed: true },
      ],
    },
  ],
};
