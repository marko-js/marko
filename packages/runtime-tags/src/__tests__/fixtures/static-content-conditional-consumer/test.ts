import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("button#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
