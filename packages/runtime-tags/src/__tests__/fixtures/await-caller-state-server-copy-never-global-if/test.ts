import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const flag = { $global: { flag: true, serializedGlobals: ["flag"] } };

// A created body whose copy never settles, `$global` fixed: an `<if>` joining the value and
// `$global` holds the client's bit with the server's, so `writeBranch` skips it: no patch waits.
export const config: TestConfig = {
  equivalent: false,
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
