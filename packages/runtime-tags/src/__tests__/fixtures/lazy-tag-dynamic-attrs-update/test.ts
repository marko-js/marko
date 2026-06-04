import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, click, click, wait, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
