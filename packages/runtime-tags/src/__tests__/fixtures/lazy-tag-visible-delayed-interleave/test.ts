import type { TestConfig } from "../../main.test";
import { flush, flushVisible, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { value: 1 },
    flush,
    wait,
    flush,
    flushVisible,
    wait,
    clickParent,
    clickMid,
    assertMidUpdated,
  ],
};

function clickParent(container: Element) {
  container.querySelector<HTMLButtonElement>(".parent")!.click();
}

function clickMid(container: Element) {
  container.querySelector<HTMLButtonElement>(".mid")!.click();
}

function assertMidUpdated(container: Element) {
  const text = container.querySelector<HTMLButtonElement>(".mid")!.textContent;
  if (!text?.includes("12")) {
    throw new Error(`Expected mid button to update to 12, received ${text}`);
  }
}
