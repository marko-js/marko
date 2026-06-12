import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggle, wait, toggle, toggle],
  equivalent: false,
};

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}
