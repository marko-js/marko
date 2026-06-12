import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggle, clickLoad, wait, toggle, clickLoad, wait, incClick],
  equivalent: false,
};

function toggle(container: Element) {
  container.querySelector<HTMLElement>("#toggle")!.click();
}

function clickLoad(container: Element) {
  container.querySelector<HTMLElement>("#load")!.click();
}

function incClick(container: Element) {
  container.querySelector<HTMLElement>("#inc")!.click();
}
