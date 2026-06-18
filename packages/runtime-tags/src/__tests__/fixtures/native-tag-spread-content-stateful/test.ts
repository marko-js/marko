import type { TestConfig } from "../../main.test";

function clickIncrement(container: Element) {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickIncrement, clickIncrement],
};
