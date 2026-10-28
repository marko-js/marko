import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body whose server copy never settles: its dynamic tag is named by the
// value, so its content is the client's and no patch waits on the copy.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
