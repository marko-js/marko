import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Loop items reading a root fill intersected with root state: the fill
// delivers through `_for_closure` into every live item scope.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", items: ["a", "b"] },
    click,
    { title: "Store!", items: ["a", "b"] },
    click,
  ],
};
