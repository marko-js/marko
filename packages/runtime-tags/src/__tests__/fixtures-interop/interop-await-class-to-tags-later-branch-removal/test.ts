import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, hide, inc],
};

function hide(document: Document) {
  document.querySelector<HTMLButtonElement>(".hide")!.click();
}

function inc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}
