import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A function passed into a shown branch's child is registered for its handler.
export const config: TestConfig = {
  steps: [{ step: 2, show: true }, click],
};
