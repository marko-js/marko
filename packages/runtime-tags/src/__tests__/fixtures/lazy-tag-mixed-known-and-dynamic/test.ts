import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, clickInc, clickToggle, wait],
  equivalent: false,
};

function clickToggle(container: Element) {
  container.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>(".inc")!.click();
}
