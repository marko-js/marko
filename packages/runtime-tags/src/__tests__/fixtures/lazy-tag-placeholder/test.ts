import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushRAF, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
