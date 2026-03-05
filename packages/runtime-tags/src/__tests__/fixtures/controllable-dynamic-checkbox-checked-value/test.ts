import type { TestConfig } from "../../main.test";

function clickA(container: Element) {
  container.querySelector<HTMLInputElement>(`input[value=a]`)!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLInputElement>(`input[value=b]`)!.click();
}

function toggleB(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickB, toggleB, toggleB, clickA],
};
