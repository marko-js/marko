import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// patch-show-static-await-created without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, promise: Promise.resolve("a") },
    wait,
    { show: true, promise: Promise.resolve("b") },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
