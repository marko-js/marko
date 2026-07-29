import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import type { TestConfig } from "../../main.test";
import { navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const crewItems = (document: Document) =>
  [...document.querySelectorAll("ul.crew li")].map((li) => li.textContent);

// Models deploy skew: the escaped child's `?persisted` chunk is no longer
// servable, so the escape-anchor loader's dynamic import rejects at eval.
const breakLoaderChunk = () => {
  for (const mode of ["debug", "optimize"]) {
    const chunk = path.join(
      import.meta.dirname,
      "dist",
      mode,
      "dom",
      "roster.marko.persisted.mjs",
    );
    if (fs.existsSync(chunk)) {
      fs.writeFileSync(
        chunk,
        'throw new Error("persisted chunk unavailable");\n',
      );
    }
  }
};

// An escape-anchor loader that rejects mid-navigation can never register its
// merge; the applier must surface the failure through the `patch(fail)` sink.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      crew: ["ada", "grace"],
      $global: { persisted: true },
    },
    clickCount,
    breakLoaderChunk,
    // The loader fires once for the parked pair, its import rejects, and the
    // failure reaches the transport sink instead of being swallowed.
    navigate({
      crew: ["ada", "grace", "alan"],
      $global: { persisted: true },
    }),
    wait,
    (document: Document) => {
      assert.equal(document.querySelector("h2.tally")!.textContent, "3 aboard");
      assert.deepEqual(crewItems(document), ["ada", "grace"]);
    },
    // The live page above the stalled subtree still responds.
    clickCount,
  ],
};
