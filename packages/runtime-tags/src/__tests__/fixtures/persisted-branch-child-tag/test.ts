import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child tag inside a constructible branch: the branch shell composes the
// child's own template and walks (imported from its server module), so the
// construct creates the child scope and its partial patches through it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "a" },
    click,
    { show: true, title: "b" },
    { show: true, title: "c", note: "n" },
    click,
    { show: false, title: "c" },
  ],
};
