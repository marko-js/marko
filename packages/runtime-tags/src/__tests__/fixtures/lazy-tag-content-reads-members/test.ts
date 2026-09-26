import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Only `value.a` is sent, for the handler; the lazy content reads both members.
export const config: TestConfig = {
  steps: [{}, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
