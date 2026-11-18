import type { TestConfig } from "../../main.test";

// A keyed row keeps its item in a store and renders its index, which a
// reorder changes while the item stays the same.
const press = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

export const config: TestConfig = {
  steps: [{}, press("li button"), press("#rotate"), press("li button")],
};
