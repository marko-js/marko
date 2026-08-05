import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Item holes closing over root state construct faithfully: an addition
// paints the live count through the item section's registered INIT.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      items: [
        { id: 1, label: "Apples" },
        { id: 2, label: "Bread" },
      ],
    },
    click,
    { items: [{ id: 2, label: "Rye" }] },
    {
      items: [
        { id: 2, label: "Rye" },
        { id: 3, label: "Milk" },
      ],
    },
  ],
};
