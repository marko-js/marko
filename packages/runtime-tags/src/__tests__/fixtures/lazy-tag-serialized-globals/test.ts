import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The lazy child's handler reads a serialized global object — the
// globals must be stringified before the ready data so the ready payload
// can reference the shared binding.
export const config: TestConfig = {
  steps: [
    { $global: { config: { step: 2 }, serializedGlobals: ["config"] } },
    wait,
    click,
    click,
  ],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
