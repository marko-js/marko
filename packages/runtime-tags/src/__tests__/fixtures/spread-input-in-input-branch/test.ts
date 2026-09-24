import type { TestConfig } from "../../main.test";

function link(document: Document) {
  document.querySelector<HTMLButtonElement>(".link")!.click();
}

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

export const config: TestConfig = {
  steps: [{}, link, increment, link, increment],
};
