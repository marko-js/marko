import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickButton = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    clickSelect(2),
    clickSelect(1),
    clickButton("button.add"),
    clickSelect(4),
    clickSelect(0),
  ],
};
