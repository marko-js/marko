import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The caught body held the lazy tag's trigger script; the same tag after the
// try writes it again, so it loads.
export const config: TestConfig = {
  steps: [{}, clickBody, wait],
  equivalent: false,
  skip_csr: true,
};

function clickBody(document: Document) {
  document.body.click();
}
