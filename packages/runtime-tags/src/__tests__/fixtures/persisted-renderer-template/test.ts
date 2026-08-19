import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A template renderer fed at a server-owned site: the entry re-renders it
// when the page's dom module registers it (debug keeps every import).
// Optimize shakes the unreferenced template, so the change rejects there
// (fail closed, unshipped code) — asserted debug-only.
export const config: TestConfig = {
  persisted: true,
  skip_optimize: true,
  steps: [
    { kind: "div" },
    { kind: "banner" },
    click,
    { kind: "span" },
    { kind: "banner" },
  ],
};
