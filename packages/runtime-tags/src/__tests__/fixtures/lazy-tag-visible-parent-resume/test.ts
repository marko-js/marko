import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    { value: 1 },
    flushVisible,
    wait,
    clickParent,
    wait,
    clickChild,
    wait,
  ],
  equivalent: false,
};

function clickParent(container: Element) {
  container.querySelector<HTMLButtonElement>(".parent")!.click();
}

function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")!.click();
}
