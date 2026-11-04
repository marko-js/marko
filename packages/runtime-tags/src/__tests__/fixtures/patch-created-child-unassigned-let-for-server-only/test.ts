import type { TestConfig } from "../../main.test";

// patch-created-child-unassigned-let-for on a page with no client code of its
// own: the patch applies without any module of the page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, items: ["a"] },
    { on: true, items: ["a", "b"] },
    { on: false, items: ["a"] },
    { on: true, items: ["c"] },
  ],
};
