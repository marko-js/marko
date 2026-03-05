import type { TestConfig } from "../../main.test";

function clickA(container: Element) {
  container.querySelector<HTMLButtonElement>("button.a")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>("button.b")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickA, clickB],
};
