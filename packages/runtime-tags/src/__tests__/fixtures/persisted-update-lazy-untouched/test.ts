import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import type { DeferredLoad } from "../../utils/import-with-context";
import { navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const panelText = (document: Document) =>
  document.querySelector("button.panel")!.textContent!;
const title = (document: Document) =>
  document.querySelector("h1")!.textContent!;
const deferred = (document: Document): DeferredLoad[] =>
  (document.defaultView as any).__deferredLoads || [];
const fallbacks = (document: Document): string[] =>
  (document.defaultView as any).__persistedNavFallbacks || [];

// Demand-load containment (spectrum gate 1): only a DISPATCHED lazy
// candidate may load its module. A cold navigation re-ships the panel's
// values (nothing held yet), so it dispatches and demand-loads — the
// documented cold cost. A warm navigation whose patch leaves the panel
// untouched (claims hold its values) must not dispatch it, and therefore
// must not load it: the import stays governed by the declared schedule.
export const config: TestConfig = {
  persisted: true,
  defer_load: ["panel.marko.setup"],
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "First",
      label: "alpha",
      show: true,
      $global: { persisted: true },
    },
    clickCount,
    // COLD: no claims yet — the panel's unchanged values still ride the
    // wire, so its dispatch consumes the demand loader (gated, unreleased:
    // the module stays unloaded while the patch parks).
    navigate({
      title: "Second",
      label: "alpha",
      show: true,
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.equal(title(document), "Second");
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
    },
    // WARM: claims now hold the panel's values; a title-only patch leaves
    // it untouched — NO new load attempt may fire.
    navigate({
      title: "Third",
      label: "alpha",
      show: true,
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.equal(title(document), "Third");
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
      assert.match(panelText(document), /alpha/);
    },
    // The gated cold load finally settles: the parked panel patch applies
    // and the page stays live — the schedule/ready path is unharmed.
    (document: Document) => deferred(document)[0].release(),
    wait,
    (document: Document) => {
      assert.match(panelText(document), /alpha/);
      assert.equal(fallbacks(document).length, 0);
    },
    clickCount,
  ],
};
