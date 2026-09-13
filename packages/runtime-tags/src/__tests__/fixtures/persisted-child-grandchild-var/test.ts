import type { TestConfig } from "../../main.test";

const bump = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.bump")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A nested child reading a grandchild's UNASSIGNED tag variable is still a
// self-contained client instance: the return recomputes on every render.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, bump, {}, toggle, {}, toggle, {}],
};
