import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, increment, showTab(2), increment, showTab(0)],
};

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

function showTab(index: number) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`[data-tab="${index}"]`)!.click();
}
