import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A grown item's hole mixes the loop item with state: the item partial
// writes the item, seeding the fresh scope, so the growth constructs.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", items: ["a"] },
    click,
    { title: "Store!", items: ["a", "b"] },
    click,
  ],
};
