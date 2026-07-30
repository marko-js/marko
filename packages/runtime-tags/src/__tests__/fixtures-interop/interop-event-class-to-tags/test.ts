import type { TestConfig } from "../../main";

function clickTags(document: Document) {
  (document.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, clickTags],
};
