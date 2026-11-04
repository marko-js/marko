import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body whose copy settles: an effect in a `<try>` reading the value and a
// param mounts, and re-runs as the param changes, by the entry the copy writes for it.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a"), label: "L" },
    wait,
    { show: true, promise: Promise.resolve("b"), label: "L" },
    wait,
    { show: true, promise: Promise.resolve("b"), label: "M" },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
