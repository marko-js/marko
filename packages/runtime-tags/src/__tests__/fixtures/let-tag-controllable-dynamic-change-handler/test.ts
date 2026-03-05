import type { TestConfig } from "../../main.test";

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment, toggle, increment, increment],
};
