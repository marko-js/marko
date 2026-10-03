import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The stream stops in the second body, which is caught as the first resolves; the
// reorder streaming its content still renders the nested `@placeholder` in it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
