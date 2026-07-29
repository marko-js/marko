import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const panelText = (document: Document) =>
  document.querySelector("button.panel")!.textContent;
const fallbacks = (document: Document): string[] =>
  (document.defaultView as any).__persistedNavFallbacks || [];

// A patch that dispatches an unloaded load= candidate demand-loads its
// merge module; when that chunk FAILS to load the dispatch can never be
// delivered, so the navigation must fail closed to a document load —
// never strand stale content behind a loader that will never register.
export const config: TestConfig = {
  persisted: true,
  reject_load: ["panel.marko"],
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
    // The dispatch demand-loads the candidate; the rejected chunk fails
    // the navigation closed within the same apply.
    navigate({
      title: "Second",
      label: "beta",
      show: true,
      $global: { persisted: true },
    }),
    wait,
    (document: Document) => {
      assert.match(panelText(document)!, /alpha/);
      assert.equal(fallbacks(document).length, 1);
    },
  ],
};
