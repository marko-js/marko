import type { TestConfig } from "../../main.test";

// patch-created-child-unassigned-let-if on a page with no client code of its
// own: the patch applies without any module of the page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 0 },
    { on: true, n: 1 },
    { on: false, n: 1 },
    { on: true, n: 2 },
  ],
};
