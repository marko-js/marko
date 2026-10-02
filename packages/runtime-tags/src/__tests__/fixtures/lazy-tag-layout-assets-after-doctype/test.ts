import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The lazy layout renders its doctype after its own assets are requested; they
// go in its head, not ahead of the doctype.
export const config: TestConfig = {
  steps: [{ value: 42 }, wait],
  equivalent: false,
  skip_csr: true,
};
