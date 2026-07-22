import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Positional iterations use their stable index as identity: same-index
// updates stay sparse and only appended indexes construct fresh branches.
const items = (a: string, b: string) => [{ view: a }, { view: b }];

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Same-index update plus an appended positional item. The new index is
    // constructed from the body shell and the existing index is merged in place.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [{ view: "a" }, { view: "a" }, { view: "b" }],
      },
    }),
    clickCount,
    // Remove the tail and update the first positional item. Removal is local
    // teardown; the changed dynamic hop constructs as a nested branch.
    navigate({
      $global: { persisted: true, topic: "x", items: [{ view: "b" }] },
    }),
  ],
};
