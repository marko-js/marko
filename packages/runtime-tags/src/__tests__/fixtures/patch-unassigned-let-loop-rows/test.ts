import type { TestConfig } from "../../main.test";

// Rows a patch adds read a page's unassigned `<let>`: the client's init renders it,
// and the document marks no row's hole for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", items: [1] },
    { v: "a", items: [1, 2] },
  ],
};
