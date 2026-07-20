import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, click, flush, wait],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
