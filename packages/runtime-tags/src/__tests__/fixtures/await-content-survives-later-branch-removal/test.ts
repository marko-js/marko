import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click(".hide"), inc],
};

function inc(document: Document) {
  for (const button of document.querySelectorAll<HTMLButtonElement>(".inc")) {
    button.click();
  }
}
