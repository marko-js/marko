import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body's `<style>` reads the value and a server param in two groups: the page
// sets their custom properties in another order than a client render, the same by name.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    wait,
    clickPrefix,
    wait,
    { show: true, label: "b}", promise: Promise.resolve("SECRET_blue") },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}

function clickPrefix(document: Document) {
  document.querySelector<HTMLButtonElement>("button.prefix")!.click();
}
