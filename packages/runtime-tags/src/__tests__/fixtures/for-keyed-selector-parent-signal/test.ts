import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickToggle = (container: Element) =>
  (container.querySelector("button.toggle") as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickSelect(0), clickToggle, clickToggle, clickSelect(2)],
};
