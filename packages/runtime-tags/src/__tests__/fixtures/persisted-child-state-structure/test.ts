import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's param-selected branch fed from client state: the instance
// selects it client-side and patches leave the selection alone.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click, {}],
};
