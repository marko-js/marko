import type { TestConfig } from "../../main.test";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// A patch waits for the lazy module, whose import fails at the network
// level: the pending `applyPatch` promise settles as rejected (the caller
// navigates) instead of hanging, and later flushes naming it reject outright.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  patches: true,
  equivalent: false,
  expect_rejection: true,
  reject_load: ["child.mjs"],
  steps: [{ label: "a" }, load, { label: "b" }],
};
