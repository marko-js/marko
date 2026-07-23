import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickAdd = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.add")!.click();
const rows = (document: Document) =>
  [...document.querySelectorAll("ul.items li")].map((li) => li.textContent);

// A loop over a `<let>` with a presentational body must classify live (state
// enters through the loop param, not a closure): client-added rows survive a
// patch navigation and later updates reconcile per-row.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    clickAdd,
    (document: Document) => assert.deepEqual(rows(document), ["a", "b", "c2"]),
    navigate({ $global: { persisted: true } }),
    (document: Document) => assert.deepEqual(rows(document), ["a", "b", "c2"]),
    clickAdd,
    (document: Document) =>
      assert.deepEqual(rows(document), ["a", "b", "c2", "c3"]),
  ],
};
