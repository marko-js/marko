import type { TestConfig } from "../../../main.test";
import { flushIdle, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Child has an idle trigger. toggle unmounts the child (scope destroyed, idle
// callback cancelled via AbortSignal). flushIdle(1) must not trigger a load —
// if it did, renderer would be set and the child would appear loaded at
// toggle(2). After the clean re-mount, flushIdle(2)+wait loads the child;
// incClick verifies reactive updates reach it after load.
export const config: TestConfig = {
  steps: [
    {},
    click("#toggle"),
    flushIdle,
    wait,
    click("#toggle"),
    flushIdle,
    wait,
    click("#inc"),
  ],
  equivalent: false,
};
