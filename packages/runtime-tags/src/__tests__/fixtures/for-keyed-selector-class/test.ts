import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickButton = (selector: string) => (container: Element) =>
  (container.querySelector(selector) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    clickSelect(0),
    clickSelect(2),
    clickButton("button.rotate"),
    clickSelect(0),
    clickButton("button.remove"),
    clickSelect(1),
    clickButton("button.clear"),
  ],
};
