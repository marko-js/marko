import type { TestConfig } from "../../main.test";

const clickFlip = (document: Document) =>
  (document.querySelector("button.flip") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickFlip, clickFlip],
};
