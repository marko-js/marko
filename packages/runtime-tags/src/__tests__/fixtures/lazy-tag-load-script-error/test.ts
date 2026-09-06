import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// The lazy loader SCRIPT fails at the network level (never evaluates): the
// server-rendered content stays visible but inert, and the loader's error
// event reports the failure. (CSR loads through the runtime-managed path
// instead, which drives `@catch`.)
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  equivalent: false,
  reject_load: ["load.mjs"],
  steps: [{ label: "a" }, load, wait],
};
