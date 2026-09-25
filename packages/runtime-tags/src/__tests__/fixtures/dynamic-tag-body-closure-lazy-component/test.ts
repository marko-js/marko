import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";

function inc(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")?.click();
}

// The page is live before the lazy card's channel lands with the body's
// registration, so `depth` changes first; the body must show the newer value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, inc, flushIdle, wait, toggle],
};
