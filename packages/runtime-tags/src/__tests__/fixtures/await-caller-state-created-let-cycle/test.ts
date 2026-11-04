import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates, written for a server hole, holds a `<let>` whose init reads
// another from the value and captures itself: the walk ends on the cycle, seeding nothing.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    wait,
    { show: true, label: "b", promise: Promise.resolve("SECRET_blue") },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
