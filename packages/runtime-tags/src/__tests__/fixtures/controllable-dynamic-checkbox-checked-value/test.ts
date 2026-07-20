import type { TestConfig } from "../../main.test";

function clickA(document: Document) {
  document.querySelector<HTMLInputElement>(`input[value=a]`)!.click();
}

function clickB(document: Document) {
  document.querySelector<HTMLInputElement>(`input[value=b]`)!.click();
}

function toggleB(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickB, toggleB, toggleB, clickA],
};
