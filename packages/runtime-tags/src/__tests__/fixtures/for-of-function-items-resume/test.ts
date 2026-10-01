import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clickSecond],
};

function clickSecond(document: Document) {
  document.querySelectorAll("button")[1].click();
}
