import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A lazy tag's script drops with its nested body; the outer `@catch`'s own tag
// writes it again, once, though both `@catch`es around it fire.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
  skip_csr: true,
};
