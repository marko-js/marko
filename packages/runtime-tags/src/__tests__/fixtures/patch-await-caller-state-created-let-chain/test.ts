import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates holds `<let>`s initialized through other `<let>`s from
// the value, its own and a child's: the patch seeds none from the server's copy.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
