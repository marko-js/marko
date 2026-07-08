import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle],
  // Even with a mutable provider, an unobserved consumer serializes no
  // wiring and registers no fan-out signal.
  bundle_excludes: { dom: ["_context_closure"] },
};
