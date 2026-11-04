import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// patch-created-child-unassigned-let-await on a page with no client code of its
// own: the patch applies without any module of the page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1 },
    { on: true, n: 2 },
    wait,
    { on: false, n: 2 },
    { on: true, n: 3 },
    wait,
  ],
};
