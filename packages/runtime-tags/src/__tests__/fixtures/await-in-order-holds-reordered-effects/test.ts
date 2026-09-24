import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Resume leaves the button inert until the in-order await completes; client
// rendering makes it live as soon as it renders.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, flush, wait, click, wait],
};
