import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Covers the lazy chunk rejection path for client created branches: the
// failed import renders the surrounding try tag's catch content.
export const config: TestConfig = {
  steps: [{}, wait, toggle, wait],
  equivalent: false,
};

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}
