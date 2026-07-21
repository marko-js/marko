import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Two hops diverge in one navigation; constructed keyed rows let the async
// boundary ride the ordinary patch await machinery instead of aborting.
const items = (a: string, b: string) => [
  { id: 1, view: a },
  { id: 2, view: b },
];

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 1 (sync) A->B and row 2 (async) B->Async at once.
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "c") },
    }),
    (document: Document) => {
      const rows = document.querySelectorAll("ul > *");
      assert.equal(rows[0]?.outerHTML, '<section class="b">B: x</section>');
      assert.equal(
        document.querySelector("p.report")?.textContent,
        "report for x",
      );
      assert.equal(
        document.querySelector("button.count")!.textContent,
        "clicked 1",
      );
    },
  ],
};
