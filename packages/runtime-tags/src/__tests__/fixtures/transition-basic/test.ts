import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function clickOther(container: Element) {
  container.querySelector<HTMLButtonElement>("#other")!.click();
}

// Async transitions: a `count` write re-fires the `<await>`, so the count
// text and await content hold at their current values (no placeholder)
// while unrelated `other` updates commit immediately; when the promise
// resolves, all entangled updates commit atomically. Two clicks mid-flight
// supersede (handlers read eager values) and commit only the final state.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    wait,
    clickInc,
    clickOther,
    wait,
    clickInc,
    clickInc,
    wait,
  ],
};
