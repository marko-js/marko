import type { TestConfig } from "../../main.test";

const increment = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, toggle, increment, toggle, increment],
};
