import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

// One click re-fires both awaits, which share the flush's transition. The
// first await resolving releases nothing — the count text and both bodies
// stay at their displayed values — and the second (final) settlement
// commits everything atomically.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, wait, flush, clickInc, wait, wait],
};
