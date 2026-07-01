import type { TestConfig } from "../../main.test";

const clickToggle = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.toggle")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickToggle(0), clickToggle(1)],
};
