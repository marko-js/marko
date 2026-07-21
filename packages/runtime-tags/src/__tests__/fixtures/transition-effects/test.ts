import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function clickCount(container: Element) {
  container.querySelector<HTMLButtonElement>("#count")!.click();
}

// Effects and transitions: an `id` write re-fires the `<await>` and holds
// the flush's effects; each script must run exactly once per commit; a
// re-write of an entangled value while pending stays held even when dirty
// checks stop it short of the await; and an unrelated `count` write —
// including one while the transition is pending — commits and runs its
// effect immediately, observing the displayed `id`.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    wait,
    clickInc,
    clickCount,
    wait,
    clickInc,
    clickInc,
    wait,
    clickCount,
    wait,
  ],
};
