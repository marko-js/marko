import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-driven conditional: patches switch the branch (add, change,
// remove, re-add) while the sibling counter's state survives throughout.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", promo: "Sale" },
    click,
    { title: "Store", promo: "Big Sale" },
    { title: "Store!", promo: "" },
    click,
    { title: "Store!", promo: "Back" },
    click,
  ],
};
