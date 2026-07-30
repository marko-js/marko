import type { TestConfig } from "../../main";

function count(document: Document) {
  document.querySelector<HTMLButtonElement>("button#count")!.click();
}

function multiplier(document: Document) {
  document.querySelector<HTMLButtonElement>("button#multiplier")!.click();
}

export const config: TestConfig = {
  steps: [{}, count, count, multiplier],
};
