import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const texts = (sel: string) => (document: Document) =>
  [...document.querySelectorAll(sel)].map((el) => el.textContent);

// Scaffold children with request-derived holes composed into a live branch
// (adjacent, and terminal before the section close): when the branch is
// constructed from its wire shell on a patch, each child's holes must fill
// from the per-response region markup — exactly once (no leftover
// placeholder pair from the values-free shell).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      show: false,
      title: "T1",
      note: "N1",
      title2: "U1",
      note2: "M1",
      $global: { persisted: true },
    },
    navigate({
      show: true,
      title: "T2",
      note: "N2",
      title2: "U2",
      note2: "M2",
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.deepEqual(texts("h3.card-title")(document), ["T2", "U2"]);
      assert.deepEqual(texts("p.card-note")(document), ["N2", "M2"]);
      assert.equal(
        document.querySelector("section.arrived")!.childElementCount,
        5,
      );
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.inner")!.click(),
    (document: Document) =>
      assert.equal(
        document.querySelector("button.count")!.textContent,
        "clicked 1",
      ),
  ],
};
