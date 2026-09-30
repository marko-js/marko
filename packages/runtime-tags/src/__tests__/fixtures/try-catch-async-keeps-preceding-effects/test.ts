import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The try body heads the stream when it catches: the counter written before it
// and the one a preceding placeholder swapped in meanwhile keep their effects.
export const config: TestConfig = {
  steps: [{}, flush, flush, click],
  equivalent: false,
};

function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
