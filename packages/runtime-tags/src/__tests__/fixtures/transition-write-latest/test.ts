import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function clickBack(container: Element) {
  container.querySelector<HTMLButtonElement>("#back")!.click();
}

// Writes while a transition is pending dirty-check against the pending
// latest, not the displayed value. Clicking +1 twice against a displayed 1
// writes the already-pending 2 — a downstream no-op, so the call counter
// shows a single fetch. Writing the displayed value back (`back` while 3 is
// pending) differs from the latest, so the revert supersedes and wins.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    wait,
    clickInc,
    clickInc,
    wait,
    clickInc,
    clickBack,
    wait,
    wait,
  ],
};
