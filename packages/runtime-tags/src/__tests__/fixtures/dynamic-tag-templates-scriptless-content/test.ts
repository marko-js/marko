import type { TestConfig } from "../../main.test";

// The plain twin of patch-dynamic-tag-templates-scriptless-content: body
// content a page with no client code renders names only templates.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "div", bold: true, label: "a" },
    { tag: "div", bold: false, label: "b" },
  ],
};
