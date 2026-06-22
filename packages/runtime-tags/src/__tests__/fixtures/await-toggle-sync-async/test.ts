import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, click, wait],
};
