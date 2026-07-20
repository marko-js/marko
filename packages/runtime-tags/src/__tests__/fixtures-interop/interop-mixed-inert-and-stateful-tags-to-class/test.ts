import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

function clickTags(document: Document) {
  (document.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, clickClass, clickTags],
};
