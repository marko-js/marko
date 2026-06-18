import type { TestConfig } from "../../main.test";

function clickToggle(container: Element) {
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickToggle],
};
