import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Loop of dynamic-tag hops: each item in the keyed `<for>` renders a
// `<${...}/>` hop whose renderer is server-chosen per item. Every iteration
// shares one build-stable site id, so the possession echo disambiguates
// instances by the iteration's loop key -- otherwise a swapping row would
// collide with its siblings on that id (the server mis-reading one row's
// renderer for another's, mis-firing or missing the fragment). Here one row
// swaps per navigation while the other holds: the loop key keeps the held
// row from false-firing and lets the swapped row apply as a fragment, with the
// `<let/count>` button state preserved.
//
// (Two rows swapping in the SAME navigation ship one fragment entry apiece --
// the first rides the main chunk chain, the rest ride detached capture chunks
// (see `persisted-update-possession-multiswap`). This fixture exercises one
// swap per nav; the loop-key disambiguation matters either way.)
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
    // Row 1 A->B; row 2 holds at B (must not false-fire on the shared site id).
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "b") },
    }),
    clickCount,
    // Row 2 B->A; row 1 holds at B (the other instance swaps independently).
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "a") },
    }),
  ],
};
