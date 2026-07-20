import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  (document.querySelector("#toggle") as HTMLButtonElement).click();
}

function reverse(document: Document) {
  (document.querySelector("#reverse") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, reverse],
};
