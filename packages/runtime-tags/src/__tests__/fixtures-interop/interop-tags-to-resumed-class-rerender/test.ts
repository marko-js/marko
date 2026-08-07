import type { TestConfig } from "../../main.test";

function clickTags(document: Document) {
  (document.querySelector("#tags") as HTMLButtonElement).click();
}

function clickToggle(document: Document) {
  (document.querySelector("#toggle") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickTags, clickTags, clickToggle],
};
