import type { TestConfig } from "../../main.test";

// A `<for to/from/step>` range loop without an explicit `by` is keyed by its
// iteration *value*, but the HTML writer computed `sameAsIndex` against the
// value instead of the positional index, so it never serialized the LoopKey.
// On resume the branches were keyed by position while the client re-keyed them
// by value -- a mismatch that corrupts the DOM on the first reactive update
// whenever value != position (here `from=2`).
//   click -> end 4->5; an `n=5` item is appended while n=2..4 keep identity.
// With the fix SSR and CSR reconcile identically (`equivalent: true`).
export const config: TestConfig = {
  steps: [{}, click],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
