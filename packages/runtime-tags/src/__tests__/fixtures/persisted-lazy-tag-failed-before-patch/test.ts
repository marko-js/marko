import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// The lazy chunk fails with NO patch pending on its channel: the page must
// stay as it is (no reload), and a later frame naming the dead channel
// rejects into navigation instead of parking forever.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  persisted: true,
  equivalent: false,
  expect_rejection: true,
  reject_load: ["child.mjs"],
  steps: [{ label: "a" }, load, wait, { label: "b" }],
};
