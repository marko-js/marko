import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

function inc(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ value: 1 }, flushRAF, wait, inc],
  equivalent: false,
};
