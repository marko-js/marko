import type { TestConfig } from "../../main.test";

function count(container: Element) {
  container.querySelector<HTMLButtonElement>("button#count")!.click();
}

function multiplier(container: Element) {
  container.querySelector<HTMLButtonElement>("button#multiplier")!.click();
}

export const config: TestConfig = {
  steps: [{}, count, count, multiplier],
};
