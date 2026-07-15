import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Fragment entries are authoritative for keyed `<for>` items the page
// ALREADY HOLDS: with a lost possession echo (the run router omits
// `x-marko-have` when the escaped value exceeds its size cap -- see
// `encodeHave` in run's persisted-protocol.ts) every key is unproven, so a
// same-route render ships a fragment for every item. Matched keys are
// swapped in place for their fragment subtree (`_update_for_keyed` returns
// the replacement into the keyed diff), fresh keys join as fragments, and
// the page stays live: state outside the loop survives, and the follow-up
// navigation (a healthy echo covering the swapped-in branches) applies as
// ordinary sparse fills.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible (and a csr navigation cannot lose an echo).
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, range: "narrow" } },
    clickCount,
    // Echo lost: matched items 1/2 arrive as fragments and swap in place;
    // the new item 3 joins as an ordinary fresh fragment.
    navigate(
      { $global: { persisted: true, range: "wide" } },
      { mutateHave: () => "" },
    ),
    clickCount,
    // Healthy echo (now proving the swapped-in branches): back to sparse
    // fills, with item 3 leaving through the ordinary keyed removal.
    navigate({ $global: { persisted: true, range: "narrow" } }),
    clickCount,
  ],
};
