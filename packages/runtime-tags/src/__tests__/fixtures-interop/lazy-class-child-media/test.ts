import type { TestConfig } from "../../main.test";
import { flushMedia, wait } from "../../utils/resolve";

function click(container: Element) {
  (container.querySelector("#inc") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{ value: 1 }, flushMedia, wait, click],
  equivalent: false,
};
