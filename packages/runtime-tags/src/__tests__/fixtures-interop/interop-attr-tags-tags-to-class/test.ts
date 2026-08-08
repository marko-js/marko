import type { TestConfig } from "../../main.test";

function clickSecond(document: Document) {
  (document.querySelectorAll("#list button")[1] as HTMLButtonElement).click();
}

export const config: TestConfig = {
  skip_optimize: true,
  steps: [{}, clickSecond],
};
