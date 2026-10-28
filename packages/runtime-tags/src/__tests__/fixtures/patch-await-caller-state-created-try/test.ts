import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates holds a `<try>`: its created render writes the try's
// creation payload, which is setup work.
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
