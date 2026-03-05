import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, flush, wait, click, wait],
  skip_equivalent: true,
};
