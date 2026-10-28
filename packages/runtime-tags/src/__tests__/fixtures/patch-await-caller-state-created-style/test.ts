import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates holds a dynamic `<style>`: its created render writes
// the rule's shell, which is setup work, and none of the server copy's value.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("red") },
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
