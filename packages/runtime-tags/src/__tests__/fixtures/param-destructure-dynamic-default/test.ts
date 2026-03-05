import type { TestConfig } from "../../main.test";

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("button")?.click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment],
};
