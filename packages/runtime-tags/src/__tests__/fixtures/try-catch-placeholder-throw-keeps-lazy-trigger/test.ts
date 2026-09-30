import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A placeholder's throw cuts the body holding the lazy tag's trigger script before
// it streams; the `@catch` keeps the script, so the same tag after the try loads.
export const config: TestConfig = {
  steps: [{}, clickBody, wait],
  equivalent: false,
  skip_csr: true,
};

function clickBody(document: Document) {
  document.body.click();
}
