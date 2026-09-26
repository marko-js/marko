import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Only `value.a` is sent, for the handler; the awaited content reads both members.
export const config: TestConfig = {
  steps: [{}, flush, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
