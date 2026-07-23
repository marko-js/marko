import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickAdd = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.add")!.click();
const rowCount = (document: Document) =>
  document.querySelectorAll("ul.rows li").length;

// A param-less loop over a `<let>` still follows client state through its
// instance count, so it must classify live: client-added rows survive a
// patch navigation.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    clickAdd,
    (document: Document) => assert.equal(rowCount(document), 3),
    navigate({ $global: { persisted: true } }),
    (document: Document) => assert.equal(rowCount(document), 3),
    clickAdd,
    (document: Document) => assert.equal(rowCount(document), 4),
  ],
};
