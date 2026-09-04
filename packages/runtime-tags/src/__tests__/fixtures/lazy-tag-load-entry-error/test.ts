import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

// The loader script evaluates but its template chunk import rejects
// (deploy skew): the load entry's rejection arm fails the server-rendered
// site into its `@catch`, as a CSR load rejecting through the runtime does.
export const config: TestConfig = {
  equivalent: false,
  reject_load: ["child.mjs"],
  steps: [{ label: "a" }, load, wait],
};
