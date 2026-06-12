import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two independent load tags load concurrently; both should render correctly
// and keep in sync with the shared reactive value after load.
export const config: TestConfig = {
  steps: [{}, wait, click],
  equivalent: false,
};
