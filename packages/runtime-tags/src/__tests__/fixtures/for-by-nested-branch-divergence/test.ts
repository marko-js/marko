import type { TestConfig } from "../../main.test";

// Regression: a keyed `<for|item| of=list by="id">` whose body is a multi-node
// `<if>/<else>` reconciled a reorder differently after SSR-resume than on a
// fresh client mount -- the resumed path rebuilt the inner branch nodes that
// the CSR path moved in place, churning DOM and losing live element state.
//
// The HTML serializer elides a conditional's renderer index when it is 0, and
// the DOM runtime never initialized that accessor on resume, so the first time
// the `<if>` re-evaluated it saw `0 !== undefined` and rebuilt the branch. With
// the fix the resumed and CSR mutation logs match again, so `equivalent: true`
// guards the regression.
export const config: TestConfig = {
  steps: [{}, rot, rot],
};

function rot(c: Element) {
  c.querySelector("button")!.click();
}
