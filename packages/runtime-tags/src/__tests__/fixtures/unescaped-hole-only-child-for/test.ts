import type { TestConfig } from "../../main.test";

const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.add")!.click();
};

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.clear")!.click();
};

// A loop param feeds an unescaped hole that is the row's whole content: a new
// row renders it before joining the list, and removing a row removes all of it.
export const config: TestConfig = {
  steps: [{}, add, add, clear],
};
