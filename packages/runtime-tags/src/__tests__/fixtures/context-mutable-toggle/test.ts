import type { TestConfig } from "../../main.test";

function show(container: Element) {
  container.querySelector<HTMLButtonElement>("button.show")!.click();
}

function change(container: Element) {
  container.querySelector<HTMLButtonElement>("button.change")!.click();
}

export const config: TestConfig = {
  steps: [{}, show, change],
};
