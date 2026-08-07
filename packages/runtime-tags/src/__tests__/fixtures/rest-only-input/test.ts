import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A pure-rest child's dom applier declares before its alias export: the
// client bundle evaluates and re-applies on state changes.
export const config: TestConfig = {
  steps: [{}, click, click],
};
