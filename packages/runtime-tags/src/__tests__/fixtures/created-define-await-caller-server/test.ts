import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A `<define>` body whose `<await>` takes a promise its only caller passes
// from the server.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ show: true, p: resolveAfter("b") }, wait],
};
