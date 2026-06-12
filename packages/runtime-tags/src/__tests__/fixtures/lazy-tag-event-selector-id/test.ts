import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector<HTMLButtonElement>("#load")!.click();
}
