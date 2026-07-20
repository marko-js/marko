import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickSelect(2), clickSelect(0)],
};
