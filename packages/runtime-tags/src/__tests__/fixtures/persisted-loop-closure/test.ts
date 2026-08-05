import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Loop items with holes reading ROOT state: additions construct and paint
// the live client value through the item section's registered INIT.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { labels: ["Apples"] },
    click,
    { labels: ["Apples", "Bread"] },
    click,
    { labels: ["Apples", "Bread", "Milk"] },
  ],
};
