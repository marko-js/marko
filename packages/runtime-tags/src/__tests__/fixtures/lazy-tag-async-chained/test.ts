import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, flush, wait, clickSync, clickAsync, wait],
  equivalent: false,
};

function clickSync(container: Element) {
  container.querySelector<HTMLButtonElement>("#sync")!.click();
}

function clickAsync(container: Element) {
  container.querySelector<HTMLButtonElement>("#async")!.click();
}
