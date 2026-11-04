import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's script joins its state with an input the patch fills only
// in param-selected structure, else seeds: the join runs by its own init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a", more: false },
    { show: true, x: "b", more: false },
    click,
    { show: true, x: "c", more: true },
    { show: false, x: "c", more: true },
    { show: true, x: "d", more: true },
  ],
};
