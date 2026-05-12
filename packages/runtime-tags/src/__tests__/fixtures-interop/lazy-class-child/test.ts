import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, toggle, wait, toggle],
  skip_equivalent: true,
};
