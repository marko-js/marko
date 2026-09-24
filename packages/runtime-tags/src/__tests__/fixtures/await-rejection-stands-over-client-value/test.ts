import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The click moves the await off the server's promise before it rejects: client
// rendering ignores that rejection, resume keeps the `@catch` the server streamed.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, flush, wait],
};
