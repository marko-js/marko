import type { TestConfig } from "../../main.test";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// A patch defers on the lazy channel, then the loader SCRIPT fails at the
// network level (script error, no evaluation): the
// pending `applyPatch` promise settles as rejected (the caller navigates)
// instead of hanging, and later frames naming the channel reject outright.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  expect_rejection: true,
  reject_load: ["load.mjs"],
  steps: [{ label: "a" }, load, { label: "b" }],
};
