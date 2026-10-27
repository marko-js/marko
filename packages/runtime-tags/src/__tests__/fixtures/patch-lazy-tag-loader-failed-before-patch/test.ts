import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// The document's loader script fails at the network level before any patch:
// a flush writing into the tag loads the module itself and applies.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  // Debug logs the loader failure, which optimize cannot.
  skip_parity: true,
  reject_load: ["load.mjs"],
  steps: [{ label: "a" }, load, wait, { label: "b" }, wait, click],
};
