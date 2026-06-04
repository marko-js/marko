import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushRAF, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
