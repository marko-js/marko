import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickBump = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();
const clickCounter = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.counter")!.click();

const inputA = {
  heading: "Shipping",
  tone: "info",
  meta: "Ships in 2 days.",
  flagged: false,
  widget: "alerts",
};

const inputB = {
  heading: "Returns",
  tone: "warn",
  meta: "Free for 30 days.",
  flagged: true,
  widget: "digest",
};

// Transitive update-generic classification: `badge` is a generic leaf and
// `card` composes only generic children, so BOTH classify -- their links
// serialize under typed `PatchChild:` keys, the interpreter descends
// through them with no compiled dispatch at any level, and neither
// template's `?update` module is ever built (no `card_marko_update_default`
// nor `badge_marko_update_default` in the bundle) -- yet their holes (text,
// class attrs, the nested badge's holes two levels down) still apply on
// navigation. `widget` composes a stateful child (`counter`), so it does
// NOT classify: its module builds with a compiled dispatch line importing
// counter's, and counter's client state + handler survive the navigations
// un-replayed.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    clickBump,
    clickCounter,
    navigate({ ...inputB, $global: { persisted: true } }),
    clickCounter,
    navigate({ ...inputA, $global: { persisted: true } }),
  ],
};
