import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLElement).click();
}

function incClick(container: Element) {
  (container.querySelector("#inc") as HTMLElement).click();
}

// Child has an idle trigger. toggle unmounts the child (scope destroyed, idle
// callback cancelled via AbortSignal). flushIdle(1) must not trigger a load —
// if it did, renderer would be set and the child would appear loaded at
// toggle(2). After the clean re-mount, flushIdle(2)+wait loads the child;
// incClick verifies reactive updates reach it after load.
export const config: TestConfig = {
  steps: [{}, toggle, flushIdle, wait, toggle, flushIdle, wait, incClick],
  equivalent: false,
};
