import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Only `value.a` is sent, for the handler; the attribute tag content reads both.
export const config: TestConfig = {
  steps: [{}, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
