import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLElement).click();
}

function clickLoad(container: Element) {
  (container.querySelector("#load") as HTMLElement).click();
}

function incClick(container: Element) {
  (container.querySelector("#inc") as HTMLElement).click();
}

// Child has an event trigger on .load. toggle unmounts the child (scope
// destroyed, listener removed via AbortSignal). clickLoad(1) must not trigger
// a load — if it did, renderer would be set and the child would appear loaded
// immediately at toggle(2). After the clean re-mount, clickLoad(2)+wait loads
// the child; incClick verifies reactive updates reach it after load.
export const config: TestConfig = {
  steps: [{}, toggle, clickLoad, wait, toggle, clickLoad, wait, incClick],
  equivalent: false,
};
