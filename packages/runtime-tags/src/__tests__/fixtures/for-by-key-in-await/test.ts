import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A loop key read inside an `<await>` body serializes with its row, but no
// subscriber set: it never changes within its branch.
export const config: TestConfig = {
  skip_csr: true,
  steps: () => [{ value: resolveAfter("x") }],
};
