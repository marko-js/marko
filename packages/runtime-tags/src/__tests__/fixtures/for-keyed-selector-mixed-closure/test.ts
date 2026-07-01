import type { TestConfig } from "../../main.test";

const clickFlip = (container: Element) =>
  (container.querySelector("button.flip") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickFlip, clickFlip],
};
