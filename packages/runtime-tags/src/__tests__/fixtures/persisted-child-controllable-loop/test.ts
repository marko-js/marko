import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One register id, one registration PER LOOP ITEM: each construct's bind
// anchors at its own item's registration scope (the nearest enclosing
// one), so the first counter's click updates only its item's state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
