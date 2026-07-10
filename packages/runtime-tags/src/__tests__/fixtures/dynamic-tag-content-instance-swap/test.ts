import type { TestConfig } from "../../main.test";

function swap(container: Element) {
  container.querySelector(`button`)!.click();
}

export const config: TestConfig = {
  steps: [{}, swap, swap],
};
