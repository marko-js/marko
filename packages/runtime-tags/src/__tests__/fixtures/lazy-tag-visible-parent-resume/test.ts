import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushVisible, wait, clickParent, assertParentUpdated],
  equivalent: false,
};

function clickParent(container: Element) {
  container.querySelector<HTMLButtonElement>(".parent")!.click();
}

function assertParentUpdated(container: Element) {
  const parent = container.querySelector<HTMLButtonElement>(".parent")!;
  if (!parent.textContent?.includes("parent 2")) {
    throw new Error("Expected parent to resume before visible child loads.");
  }
}
