import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, click, wait, click, wait, click, wait, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
