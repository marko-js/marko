import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// User imports collide with natural patch parameter names; the optimized
// persisted chunk must still exclude their server-only module.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server patch", "server live", '"./data"'],
  // The imported helpers stand in for server-only computation; a plain
  // client render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { id: 3, $global: { persisted: true } },
    clickButton,
    navigate({ id: 0, $global: { persisted: true } }),
    clickButton,
    navigate({ id: 5, $global: { persisted: true } }),
    clickButton,
  ],
};
