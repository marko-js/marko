import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Lazy chunks under a custom runtimeId: the load entry must signal
// readiness against the matching runtime global.
export const config: TestConfig = {
  runtime_id: "MY_APP",
  steps: [{}, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
