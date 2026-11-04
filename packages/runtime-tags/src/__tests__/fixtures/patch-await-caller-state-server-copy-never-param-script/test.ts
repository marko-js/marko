import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body whose copy never settles: an effect reading the value and a param the
// patch writes mounts, and re-runs as the param changes, by its `<await>`'s entries.
export const config: TestConfig = {
  patches: true,
  skip_documents: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a"), label: "L" },
    wait,
    { show: true, promise: new Promise(never), label: "L" },
    wait,
    { show: true, promise: new Promise(never), label: "M" },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
