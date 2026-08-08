import type { TestConfig } from "../../main.test";

function clickInner(document: Document) {
  (document.querySelector("#inner") as HTMLElement).click();
}

function clickTags(document: Document) {
  (document.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  skip_optimize: true,
  steps: [{}, clickInner, clickTags],
};
