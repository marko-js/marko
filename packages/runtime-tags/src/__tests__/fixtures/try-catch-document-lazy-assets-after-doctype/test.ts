import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The document renders in a `<try>` body, whose head takes no later assets; the
// lazy tag after it writes its own in the body, not ahead of the doctype.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, wait],
};
