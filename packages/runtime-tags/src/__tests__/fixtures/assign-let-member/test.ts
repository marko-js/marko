import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, mutate, apply],
};

function mutate(document: Document) {
  document.querySelector<HTMLButtonElement>(".mutate")!.click();
}

function apply(document: Document) {
  document.querySelector<HTMLButtonElement>(".apply")!.click();
}
