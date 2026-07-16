import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Positional iterations use their stable index as fragment identity: same-
// index updates stay sparse and only appended indexes ship as fragments.
const items = (a: string, b: string) => [{ view: a }, { view: b }];

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Same-index update plus an appended positional item. The new index is
    // fragment-delivered and the existing index is merged in place.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [{ view: "a" }, { view: "a" }, { view: "b" }],
      },
    }),
    clickCount,
    // Remove the tail and update the first positional item. Removal is local
    // teardown; the changed dynamic hop arrives as a nested fragment.
    navigate({
      $global: { persisted: true, topic: "x", items: [{ view: "b" }] },
    }),
  ],
};
