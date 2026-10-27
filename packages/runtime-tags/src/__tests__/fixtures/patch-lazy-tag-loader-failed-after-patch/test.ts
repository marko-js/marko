import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A patch loads the module itself before the document's trigger fires,
// whose loader script then fails: the resident module keeps later patches.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  // Debug logs the loader failure, which optimize cannot.
  skip_parity: true,
  reject_load: ["load.mjs"],
  steps: [{ label: "a" }, load, { label: "b" }, wait, { label: "c" }, click],
};
