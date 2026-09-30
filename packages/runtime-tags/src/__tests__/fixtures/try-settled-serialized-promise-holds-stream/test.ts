import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";
import { click } from "../../utils/steps";

// The lazy child's promise serializes once the `<try>` settled; the stream
// still waits on it and on the sibling `<await>`.
export const config: TestConfig = {
  steps: [{}, flush, flush, flush, click("button")],
  equivalent: false,
  skip_csr: true,
};
