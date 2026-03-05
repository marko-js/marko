import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment, wait],
};
