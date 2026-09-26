import type { TestConfig } from "../../main.test";

const setCounter = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.counter")!.click();
};

const incrementInput = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.doubled")!.click();
};

export const config: TestConfig = {
  steps: [{}, setCounter, incrementInput],
};
