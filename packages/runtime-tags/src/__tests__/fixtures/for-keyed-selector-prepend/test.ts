import type { TestConfig } from "../../main";

const clickAdd = (document: Document) =>
  (document.querySelector("button.add") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickAdd, clickAdd],
};
