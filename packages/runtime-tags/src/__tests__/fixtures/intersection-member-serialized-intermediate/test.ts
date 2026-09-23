import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, sameLength, toggle],
};

function sameLength(document: Document) {
  document.querySelector<HTMLButtonElement>(".same-length")!.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
