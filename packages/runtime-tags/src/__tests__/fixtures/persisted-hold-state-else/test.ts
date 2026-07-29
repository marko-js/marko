import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const input = (a: string, b: string) => ({
  a,
  b,
  $global: { persisted: true },
});

// A dual-body client-state conditional: the server renders its own
// selection while the client shows the other branch. The mismatched
// branch's fills must stay parked — never pairing to (or writing onto)
// the visible branch — and the hidden branch must show the patched data
// when the client toggles back.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input("alpha v1", "beta v1"),
    navigate(input("alpha v1", "beta v1")),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.b")!.click(),
    (document: Document) => {
      assert.equal(document.querySelector("p.a"), null);
      assert.equal(document.querySelector("p.b")?.textContent, "beta v1");
    },
    // The server still renders tab=0 (client-owned state): the if-branch
    // content changes while the client shows the else branch.
    navigate(input("alpha v2", "beta v1")),
    (document: Document) => {
      assert.equal(document.querySelector("p.a"), null, "else stays shown");
      assert.equal(
        document.querySelector("p.b")?.textContent,
        "beta v1",
        "visible branch must not take the hidden branch's fills",
      );
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.a")!.click(),
    (document: Document) => {
      assert.equal(
        document.querySelector("p.a")?.textContent,
        "alpha v2",
        "re-entered branch shows the patched value",
      );
      assert.equal(document.querySelector("p.b"), null);
    },
    // A follow-up patch to the re-shown branch: its group anchor must
    // still point at THIS branch (a mismatched nav must not have rebound
    // it to the other branch's record).
    navigate(input("alpha v3", "beta v1")),
    (document: Document) => {
      assert.equal(
        document.querySelector("p.a")?.textContent,
        "alpha v3",
        "visible branch takes later patches",
      );
    },
    // Another hidden-branch edit in the other direction: show the else,
    // patch it while the if is shown.
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.b")!.click(),
    navigate(input("alpha v2", "beta v2")),
    (document: Document) => {
      assert.equal(document.querySelector("p.b")?.textContent, "beta v2");
    },
  ],
};
