import type { TestConfig } from "../../main.test";

const swap = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
};

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.clear")!.click();
};

const mount = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.mount")!.click();
};

export const config: TestConfig = {
  steps: [{}, swap, swap, clear, mount],
};
