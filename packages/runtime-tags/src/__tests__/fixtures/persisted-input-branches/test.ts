import type { TestConfig } from "../../main.test";

// Server-driven `<if>` and unkeyed `<for>` in one persisted template: items
// pair positionally; the static branch has no walks, so it ships shell-less
// and diverging back to it rejects the patch (a document navigation).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { name: "world", show: true, items: [1, 2] },
    { name: "marko", show: true, items: [1, 2, 3] },
    { name: "marko", show: false, items: [3] },
    { name: "mark", show: true, items: [3] },
  ],
};
