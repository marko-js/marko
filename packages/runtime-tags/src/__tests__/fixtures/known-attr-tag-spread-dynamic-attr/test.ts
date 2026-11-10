import type { TestConfig } from "../../main.test";

function click(document: Document) {
  (document.querySelector("button") as HTMLButtonElement).click();
}

// A spread on an attribute tag the child reads whole updates after resume.
export const config: TestConfig = {
  steps: [{}, click, click],
};
