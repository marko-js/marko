import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, clickA, clickB, wait],
  equivalent: false,
};

function clickA(container: Element) {
  container.querySelector<HTMLButtonElement>("#a")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>("#b")!.click();
}
