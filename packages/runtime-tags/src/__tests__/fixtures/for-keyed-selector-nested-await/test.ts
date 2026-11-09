import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, clickSelect(1), clickSelect(2)],
};
