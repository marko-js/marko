import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPanel = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.panel")!.click();
const panelText = (document: Document) =>
  document.querySelector("button.panel")!.textContent!;

// `load=` lazy tags meet persisted navigations: a patch that dispatches the
// unloaded module demand-loads it, replays the parked patch data, then
// dispatches directly. The post-navigation value MUST land (asserted, not
// just snapshotted — a park that applies incomplete patch data and drops
// the update once regenerated snapshots quietly).
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      title: "First",
      label: "alpha",
      show: true,
      $global: { persisted: true },
    },
    clickCount,
    // Patch dispatches while the lazy module is still unloaded: the
    // dispatch demand-loads it and the parked patch replays on ready.
    navigate({
      title: "Second",
      label: "beta",
      show: true,
      $global: { persisted: true },
    }),
    flushIdle,
    wait,
    (document: Document) => assert.match(panelText(document), /beta/),
    clickPanel,
    (document: Document) => assert.match(panelText(document), /beta hit 1/),
    // The loaded child now updates fine-grained; its click state survives.
    navigate({
      title: "Third",
      label: "gamma",
      show: true,
      $global: { persisted: true },
    }),
    (document: Document) => assert.match(panelText(document), /gamma hit 1/),
    clickPanel,
  ],
};
