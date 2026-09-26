import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// A lazy tag that fails to load after its `<try>` caught an error and zeroed
// the placeholder count takes nothing more from that count.
export const config: TestConfig = {
  steps: [{}, toggle, flushRAF, wait, load, wait],
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

function load(document: Document) {
  document.querySelector<HTMLButtonElement>("#load")!.click();
}
