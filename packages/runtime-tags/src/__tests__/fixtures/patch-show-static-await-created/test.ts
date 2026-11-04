import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A statically hidden `<show>` in an `<await>` body that a created scope's
// client promise settles stays hidden.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
