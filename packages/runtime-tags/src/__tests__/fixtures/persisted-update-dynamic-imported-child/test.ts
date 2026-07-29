import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const rosterItems = (document: Document, index: number) => {
  const roster = document.querySelectorAll<HTMLUListElement>("ul.roster");
  return [...roster[index].querySelectorAll("li")].map((li) => li.textContent);
};

// Both dynamic tags select parent-imported templates, so the parent's entry
// must link each candidate's `?persisted` merge for same-renderer navigations.
const assertRosterPair = (document: Document) => {
  assert.deepEqual(rosterItems(document, 0), ["ada", "grace", "alan"]);
  assert.deepEqual(rosterItems(document, 1), ["ada", "grace", "alan"]);
};
const assertSwappedAway = (document: Document) => {
  assert.equal(document.querySelectorAll("ul.roster").length, 0);
  assert.ok(document.querySelector("div[members]"));
  assert.equal(
    document.querySelector("p.digest")!.textContent,
    "3 on call: ada, grace, alan",
  );
};
const assertDigestUpdated = (document: Document) => {
  assert.equal(
    document.querySelector("p.digest")!.textContent,
    "2 on call: grace, alan",
  );
};
const assertSwappedBack = (document: Document) => {
  assert.deepEqual(rosterItems(document, 0), ["grace", "alan"]);
  assert.deepEqual(rosterItems(document, 1), ["grace", "alan"]);
};

export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      title: "On Call",
      view: "roster",
      wide: true,
      members: ["ada", "grace"],
      $global: { persisted: true },
    },
    clickCount,
    // Same renderers on both anchors; the child keyed loops gain an item.
    navigate({
      title: "On Call",
      view: "roster",
      wide: true,
      members: ["ada", "grace", "alan"],
      $global: { persisted: true },
    }),
    assertRosterPair,
    clickCount,
    // Both anchors swap renderers (construction path).
    navigate({
      title: "Off Duty",
      view: "empty",
      wide: false,
      members: ["ada", "grace", "alan"],
      $global: { persisted: true },
    }),
    assertSwappedAway,
    // Same renderer again on the second anchor; only the digest text changes.
    navigate({
      title: "Off Duty",
      view: "empty",
      wide: false,
      members: ["grace", "alan"],
      $global: { persisted: true },
    }),
    assertDigestUpdated,
    // Swap back, then reconcile the restored keyed loops once more.
    navigate({
      title: "On Call",
      view: "roster",
      wide: true,
      members: ["grace", "alan"],
      $global: { persisted: true },
    }),
    assertSwappedBack,
    clickCount,
  ],
};
