import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body whose server copy never settles: a handler reading nothing is
// attached and a static attribute is markup, so no patch waits on the copy.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    wait,
    { show: true, label: "b", promise: new Promise(never) },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
