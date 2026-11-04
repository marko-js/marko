import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `<try>` in a body the flush creates reads the promise as a closure too: its
// created scope still takes that closure's init.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    wait,
    { show: true, label: "b", promise: Promise.resolve("b") },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
