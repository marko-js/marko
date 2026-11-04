import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const flag = { $global: { flag: true, serializedGlobals: ["flag"] } };

// A created body whose copy never settles: a dynamic tag named from the value and
// `$global` holds the client's bit with the server's, so its content isn't written.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { show: false, promise: Promise.resolve("a"), ...flag },
    wait,
    { show: true, promise: new Promise(never), ...flag },
    wait,
    clickSwap,
    wait,
  ],
};

function never() {}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
