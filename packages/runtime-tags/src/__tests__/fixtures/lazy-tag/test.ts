import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, click],
  skip_equivalent: true,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
