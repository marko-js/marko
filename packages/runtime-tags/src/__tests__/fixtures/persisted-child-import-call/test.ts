import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Imported code called by a child inside client-owned structure is client
// code like anywhere else in Marko: the instance re-renders it client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
