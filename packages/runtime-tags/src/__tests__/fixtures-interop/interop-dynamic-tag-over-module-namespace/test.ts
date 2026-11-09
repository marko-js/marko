import type { TestConfig } from "../../main.test";

function clickA(document: Document) {
  (document.querySelector("#a") as HTMLButtonElement).click();
}

function increment(document: Document) {
  (document.querySelector("#increment") as HTMLButtonElement).click();
}

function toggle(document: Document) {
  (document.querySelector("#toggle") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickA, increment, toggle, toggle],
};
