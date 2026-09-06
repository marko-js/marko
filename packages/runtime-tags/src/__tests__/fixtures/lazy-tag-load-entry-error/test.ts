import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// The loader script evaluates but its template chunk import rejects
// (deploy skew): the load entry reports through `readyFailed` and the
// server-rendered content stays visible but inert. (CSR rejects through
// the runtime-managed path instead, which drives `@catch`.)
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  equivalent: false,
  reject_load: ["child.mjs"],
  steps: [{ label: "a" }, load, wait],
};
