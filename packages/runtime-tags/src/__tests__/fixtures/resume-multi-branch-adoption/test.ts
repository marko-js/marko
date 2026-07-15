import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clear],
};

function clear(container: Element) {
  container.querySelector<HTMLButtonElement>("button#clear")!.click();
}
