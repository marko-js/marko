import type { TestConfig } from "../../main.test";
import { rafFlush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, rafFlush, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
