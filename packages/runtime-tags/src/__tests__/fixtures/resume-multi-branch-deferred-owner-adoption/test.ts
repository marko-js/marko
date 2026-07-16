import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, show, clear],
};

function show(container: Element) {
  container.querySelector<HTMLButtonElement>("button#show")!.click();
}

function clear(container: Element) {
  container.querySelector<HTMLButtonElement>("button#clear")!.click();
}
