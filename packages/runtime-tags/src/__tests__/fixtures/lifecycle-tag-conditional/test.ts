import type { TestConfig } from "../../main.test";

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>("#increment")?.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")?.click();
}

export const config: TestConfig = {
  steps: [{}, increment, toggle, increment, toggle],
};
