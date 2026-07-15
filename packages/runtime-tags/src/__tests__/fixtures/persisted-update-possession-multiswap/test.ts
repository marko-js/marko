import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Two rows of a keyed `<for>` whose `<${...}/>` hops BOTH diverge in one
// navigation: row 1 A->B and row 2 B->A at once. Each swapping site ships its
// own fragment entry (keyed by its build-stable site id + loop key), so the
// update carries two fragments in a single frame -- the first rides the main
// chunk chain, the rest ride detached capture chunks (see `_fragment`). Before
// multi-fragment capture this pair collided on a single capture slot and fell
// back to a full navigation; here both swaps apply as fragments with the
// `<let/count>` button state preserved across the nav.
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
