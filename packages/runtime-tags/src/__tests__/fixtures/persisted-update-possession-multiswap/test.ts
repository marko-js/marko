import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Two keyed rows' hops diverge in one navigation: each ships its own fragment
// entry in a single frame, with `<let/count>` state preserved across the nav.
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
    // Both rows swap simultaneously: row 1 A->B, row 2 B->A.
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "a") },
    }),
    clickCount,
    // Swap both back the other way in one nav: row 1 B->A, row 2 A->B.
    navigate({
      $global: { persisted: true, topic: "x", items: items("a", "b") },
    }),
  ],
};
