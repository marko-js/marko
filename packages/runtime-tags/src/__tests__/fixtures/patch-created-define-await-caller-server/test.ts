import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A patch creates a `<define>` body whose `<await>` takes a promise its only
// caller passes from the server: the patch creates and settles it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, p: Promise.resolve("a") },
    { show: true, p: resolveAfter("b") },
    wait,
  ],
};
