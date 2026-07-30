import type { TestConfig } from "../../main";
import { flush, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait],
};
