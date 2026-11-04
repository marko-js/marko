import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Branches a content param selects, nested in stateful structure: patch
// renders skip the stateful branch, so they patch neither branch nor rows.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", items: ["x", "y"] },
    { label: "", items: ["y"] },
    toggle,
    toggle,
    { label: "b", items: ["x", "z"] },
  ],
};
