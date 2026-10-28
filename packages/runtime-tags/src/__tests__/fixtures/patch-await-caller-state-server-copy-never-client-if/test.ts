import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created body whose server copy never settles: a constant `<let>`, `<style>`
// and a server hole sit in a branch the client renders from the value: no patch waits.
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
