import type { TestConfig } from "../../main.test";

function inc(container: Element) {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
}

export const config: TestConfig = {
  steps: [{ $global: { label: "intro" } }, inc],
  // The self-consume drops to the immutable tier once the provide side
  // classifies server-only: no context runtime may reach the client.
  bundle_excludes: { dom: ["self_context_sentinel", "_context"] },
};
