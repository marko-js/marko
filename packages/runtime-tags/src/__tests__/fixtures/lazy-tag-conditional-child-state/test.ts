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

function clickParent(document: Document) {
  document.querySelector<HTMLButtonElement>(".parent")!.click();
}

function clickChild(document: Document) {
  document.querySelector<HTMLButtonElement>(".child")!.click();
}
