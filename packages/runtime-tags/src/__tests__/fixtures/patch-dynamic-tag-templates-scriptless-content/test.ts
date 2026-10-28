import type { TestConfig } from "../../main.test";

// Body content a page with no client code renders names only templates: the
// page loads no template module, so a patch creating one ships its whole shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "div", bold: true, label: "a" },
    { tag: "div", bold: false, label: "b" },
  ],
};
