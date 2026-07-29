import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const hits = (document: Document) =>
  document.querySelector("button.hit")?.textContent;

// A stateful `content=` panel whose surrounding branch has no other nucleus:
// the define's body links into the referencing tree, so the branch arrives
// live and the panel's handler works — never as an inert region with a dead
// button.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(hits(document), "hits 0"),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.hit")!.click(),
    (document: Document) => assert.equal(hits(document), "hits 1"),
  ],
};
