import type { TestConfig } from "../../main.test";

function add(container: Element) {
  container.querySelector<HTMLButtonElement>("button.add")!.click();
}

export const config: TestConfig = {
  steps: [{}, add, add],
};
