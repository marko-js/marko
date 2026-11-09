import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

function clickTags(document: Document) {
  (document.querySelector("#tags") as HTMLButtonElement).click();
}

// A spread that changes around the same content leaves it unrendered; a resumed
// page renders the Class parent's live content once more as it loads.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickTags, clickClass, clickTags],
};
