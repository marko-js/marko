import type { TestConfig } from "../../main.test";
import { flushRAF } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")?.click();
}

// A `<const>` naming a lazily loaded template renders through the wrapper that
// loads its assets, as the import itself does.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, click, flushRAF],
};
