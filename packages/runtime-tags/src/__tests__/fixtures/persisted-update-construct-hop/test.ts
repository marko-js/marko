import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
const clickWidget = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.widget")!.click();
const clickBump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.bump")!.click();

// A cross-route hop's diverging branch arrives as resumable HTML: the applier
// inserts and resumes it, and the walked scopes join the live tree.
export const config: TestConfig = {
  // Replacement-first: the persisted entry ships no fills-path construction
  // material, so the define contents' render graphs tree-shake out.
  persisted: true,
  dom_bundle_excludes: [
    "getSession",
    "getMetrics",
    "hello ",
    "views",
    "sales",
    "welcome home",
    "admin tools enabled",
  ],
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route hop: the dashboard constructs from its wire shell and the
    // widget's effects must run for the walker-built scopes.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "dashboard",
        user: "ada",
        range: "day",
        focus: "views",
        admin: false,
        seed: 5,
        step: 2,
        serializedGlobals: { seed: true, step: true },
      },
    }),
    clickWidget,
    // The dom-less store's effect and $global-reading change handler both
    // require the stamped identity constructed branches carry.
    clickBump,
    clickToggle,
    // Same-route update, matched: ordinary fine-grained fills into the
    // constructed subtree while the widget's click count survives.
    navigate({
      $global: {
        persisted: true,
        view: "dashboard",
        user: "grace",
        range: "week",
        focus: "clicks",
        admin: true,
        seed: 5,
        step: 2,
        serializedGlobals: { seed: true, step: true },
      },
    }),
    clickWidget,
    clickBump,
    // Cross-route back: a constructed branch replacing a constructed branch.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
      },
    }),
    clickCount,
    clickToggle,
  ],
};
