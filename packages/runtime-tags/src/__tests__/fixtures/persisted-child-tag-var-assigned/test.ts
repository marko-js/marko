import type { TestConfig } from "../../main.test";

const reset = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.reset")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// Assigning a child's tag variable inside client-owned structure writes
// back through the change handler the client instance installs.
export const config: TestConfig = {
  persisted: true,
  steps: [{ start: 1 }, reset, toggle, toggle, { start: 3 }, reset],
};
