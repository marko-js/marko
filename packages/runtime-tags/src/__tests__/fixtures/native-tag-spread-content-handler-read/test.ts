import type { TestConfig } from "../../main.test";

function clickCheck(container: Element) {
  container.querySelector<HTMLButtonElement>("button.cap")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickCheck],
};
