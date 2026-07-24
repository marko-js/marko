import type { TestConfig } from "../../main.test";

function clickFirst(document: Document) {
  document.querySelectorAll("button")[0].click();
}

function clickSecond(document: Document) {
  document.querySelectorAll("button")[1].click();
}

export const config: TestConfig = {
  steps: [{}, clickFirst, clickSecond],
};
