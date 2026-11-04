import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A paired body whose copy settles: an effect in a `<try>` reading a param re-runs
// as the param changes, by the entry the copy writes for it.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("a"), label: "L" },
    wait,
    { promise: Promise.resolve("b"), label: "L" },
    wait,
    { promise: Promise.resolve("b"), label: "M" },
    wait,
    clickSwap,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
