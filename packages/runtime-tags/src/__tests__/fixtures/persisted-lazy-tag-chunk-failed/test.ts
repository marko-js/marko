import type { TestConfig } from "../../main.test";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// A patch defers on the lazy channel; the loader script evaluates but its
// inner template chunk import rejects (deploy skew): the load entry reports
// the failure so the pending `applyPatch` promise settles as rejected (the
// caller navigates) instead of hanging.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  expect_rejection: true,
  reject_load: ["child.mjs"],
  steps: [{ label: "a" }, load, { label: "b" }],
};
