import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body the flush creates holds assigned `<let>`s whose inits read `<let>`s from the
// value and a param: each seeds in their groups, never from the server's copy.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: Promise.resolve("a") },
    wait,
    { show: true, label: "b", promise: Promise.resolve("SECRET_blue") },
    wait,
    clickSwap,
    wait,
    clickE,
    wait,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}

function clickE(document: Document) {
  document.querySelector<HTMLButtonElement>("button.e")!.click();
}
