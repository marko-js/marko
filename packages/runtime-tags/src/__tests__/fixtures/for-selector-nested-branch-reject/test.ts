import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{ show: true }, clickSelect(1), clickSelect(0)],
};
