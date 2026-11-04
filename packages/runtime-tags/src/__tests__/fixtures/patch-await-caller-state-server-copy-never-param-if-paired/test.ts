import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A paired body whose copy never settles: an `<if>` reading the value and a param
// stays the client's, its entry written by the `<await>`.
export const config: TestConfig = {
  patches: true,
  skip_documents: true,
  steps: () => [
    { promise: Promise.resolve("a"), label: "L" },
    wait,
    { promise: new Promise(never), label: "L" },
    wait,
    { promise: new Promise(never), label: "M" },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
