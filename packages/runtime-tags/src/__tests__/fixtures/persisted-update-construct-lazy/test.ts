import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const tapGadget = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".gadget__tap")!.click();

// A lazy child inside a constructed hop initializes through its keyed ready batch.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", title: "", label: "" } },
    clickCount,
    // The lazy gadget arrives as server-rendered constructed branches.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "detail",
        title: "Widget One",
        label: "alpha",
      },
    }),
    // The idle load replays resume data against the promoted adopted scopes;
    // the gadget's own `<let>` seed must render at that point, pre-tap.
    flushIdle,
    wait,
    (document: Document) =>
      assert.equal(
        document.querySelector(".gadget__tap")!.textContent,
        "taps 0",
      ),
    tapGadget,
    // Back to home (constructed swap away)...
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
        title: "",
        label: "",
      },
    }),
    // With the module ready, the next construction initializes in the same apply.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "detail",
        title: "Widget Two",
        label: "beta",
      },
    }),
    flushIdle,
    wait,
    tapGadget,
    clickCount,
  ],
};
