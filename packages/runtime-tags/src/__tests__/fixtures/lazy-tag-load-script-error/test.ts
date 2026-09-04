import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// The lazy loader SCRIPT fails at the network level (never evaluates): its
// error event fails the server-rendered site into its `@catch`, as a CSR
// load rejecting through the runtime does.
export const config: TestConfig = {
  equivalent: false,
  reject_load: ["load.mjs"],
  steps: [{ label: "a" }, load, wait],
};
