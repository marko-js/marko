import type { TestConfig } from "../../main.test";

const increment_child = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc-child")!.click();
};

const increment_parent = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc-parent")!.click();
};

const reset = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.reset")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment_child, increment_parent, reset],
};
