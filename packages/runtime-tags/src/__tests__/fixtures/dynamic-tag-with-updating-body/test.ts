import type { TestConfig } from "../../main.test";

function count(document: Document) {
  document.querySelector<HTMLButtonElement>("#count")!.click();
}

function changeTag(document: Document) {
  document.querySelector<HTMLButtonElement>("#changeTag")!.click();
}

export const config: TestConfig = {
  steps: [{}, count, changeTag, count],
};
