import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body's controlled `<let>` reads a `<let>` from the value and a param the
// caller passes from its state: the patch seeds it in neither's group.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("p") },
    wait,
    clickSet,
    { show: true, label: "SECRET_b", promise: Promise.resolve("p") },
    wait,
  ],
};

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
}
