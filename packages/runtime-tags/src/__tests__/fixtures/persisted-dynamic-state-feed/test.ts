import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A dynamic tag whose renderer the server selects and whose input is
// client state recomputes client-side: the renderer read fills.
export const config: TestConfig = {
  persisted: true,
  steps: [{ on: true }, click, { on: false }, click, { on: true }],
};
