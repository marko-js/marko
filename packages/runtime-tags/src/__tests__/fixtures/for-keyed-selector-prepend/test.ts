import type { TestConfig } from "../../main.test";

const clickAdd = (container: Element) =>
  (container.querySelector("button.add") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickAdd, clickAdd],
};
