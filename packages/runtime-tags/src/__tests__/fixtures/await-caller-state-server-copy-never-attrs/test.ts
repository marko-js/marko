import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The server's copy never settles, and the body's attributes and text read only
// its value: no patch waits on it.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: new Promise(never) },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
