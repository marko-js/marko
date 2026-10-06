import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, increment, showSecondTab, increment, showFirstTab],
};

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

function showSecondTab(document: Document) {
  document.querySelector<HTMLButtonElement>('[data-tab="1"]')!.click();
}

function showFirstTab(document: Document) {
  document.querySelector<HTMLButtonElement>('[data-tab="0"]')!.click();
}
