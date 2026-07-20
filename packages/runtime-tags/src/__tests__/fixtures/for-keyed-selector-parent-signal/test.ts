import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickToggle = (document: Document) =>
  (document.querySelector("button.toggle") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickSelect(0), clickToggle, clickToggle, clickSelect(2)],
};
