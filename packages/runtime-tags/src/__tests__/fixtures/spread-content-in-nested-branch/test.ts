import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, increment],
};
