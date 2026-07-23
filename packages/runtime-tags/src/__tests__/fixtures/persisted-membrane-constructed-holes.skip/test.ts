import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const text = (sel: string) => (document: Document) =>
  document.querySelector(sel)?.textContent;

// A scaffold child with request-derived holes composed into a live branch:
// when the branch is constructed from its wire shell on a patch, the child's
// holes must fill from the per-response region markup.
// Skipped: `_update_region` cannot anchor inside a constructed branch (the
// walker binds the child *scope*, not a node, at the region accessor and the
// serialized branch fill carries no range), so the values-free holes persist
// — see agent-feedback/bugs.md "Custom-tag regions cannot anchor…".
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, title: "T1", note: "N1", $global: { persisted: true } },
    navigate({
      show: true,
      title: "T2",
      note: "N2",
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.equal(text("h3.card-title")(document), "T2");
      assert.equal(text("p.card-note")(document), "N2");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.inner")!.click(),
    (document: Document) =>
      assert.equal(text("button.count")(document), "clicked 1"),
  ],
};
