import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Covers the lazy chunk rejection path: the failed import emits an
// "error" event on the parent component of the load tag.
export const config: TestConfig = {
  steps: [{}, toggle, wait],
  equivalent: false,
};

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}
