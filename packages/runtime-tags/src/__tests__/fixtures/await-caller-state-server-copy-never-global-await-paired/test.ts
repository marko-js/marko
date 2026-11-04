import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const flag = { $global: { flag: true, serializedGlobals: ["flag"] } };

// A paired body whose copy never settles: a nested `<await>` reading the value and
// `$global` holds the client's bit with the server's, so it settles on the client.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a"), ...flag },
    wait,
    { promise: new Promise(never), ...flag },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
