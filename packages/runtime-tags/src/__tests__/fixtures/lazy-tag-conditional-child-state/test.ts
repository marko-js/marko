import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    {},
    wait,
    clickParent,
    flushRAF,
    clickParent,
    wait,
    flushRAF,
    clickChild,
  ],
  equivalent: false,
};

function clickParent(container: Element) {
  container.querySelector<HTMLButtonElement>(".parent")!.click();
}

function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")!.click();
}
