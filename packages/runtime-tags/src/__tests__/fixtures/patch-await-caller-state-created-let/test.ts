import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates holds `<let>`s from the value: the client's value
// gives them their first value, and the patch seeds none from the server's copy.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("red") },
    wait,
    { show: true, label: "b", promise: Promise.resolve("SECRET_blue") },
    wait,
    clickSet,
    wait,
    clickSwap,
    wait,
  ],
};

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
