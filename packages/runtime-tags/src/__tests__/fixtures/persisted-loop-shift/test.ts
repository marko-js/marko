import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const items = (...pairs: [number, string][]) =>
  pairs.map(([id, label]) => ({ id, label }));

// The first patch of the session PREPENDS an item (its shell arrives at the
// end of the frame, so the additions defer) while a conditional and captures
// trail the loop: growth must not shift any pairing.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: items([1, "Apples"], [2, "Bread"]), promo: "Sale", note: "hi" },
    click,
    {
      items: items([3, "Milk"], [1, "Apples!"], [2, "Bread!"]),
      promo: "Big Sale",
      note: "hello",
    },
    click,
    { items: items([2, "Bread!"]), promo: "", note: "bye" },
    { items: items([2, "Bread!"], [4, "Eggs"]), promo: "Back", note: "again" },
  ],
};
