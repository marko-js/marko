import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector("button")!.click();
const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();

const inputA = {
  label: "New",
  tone: "info",
  panel: { title: "Shipping", body: "Ships in 2 days.", expanded: true },
  name: "alerts",
};

const inputB = {
  label: "Sale",
  tone: "warn",
  panel: { title: "Returns", body: "Free for 30 days.", expanded: false },
  name: "digest",
};

// Update-generic children: `badge` and `panel` prove their whole `?update`
// module would be the generic interpreter, so the parent dispatches their
// patch scopes through `_update_scope` directly and their modules are never
// built (no `badge_marko_update_default` in the bundle) -- yet their holes
// (text, class/title attrs, and the `open` controllable) still apply on
// navigation. `toggle` is disqualified (state + handler): its module import
// stays, its request hole updates, and its client state + handler survive
// the navigations un-replayed.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    clickCount,
    clickToggle,
    navigate({ ...inputB, $global: { persisted: true } }),
    clickToggle,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
