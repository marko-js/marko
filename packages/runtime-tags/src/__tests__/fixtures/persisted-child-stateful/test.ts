import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".t")!.click();
};
const count = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".c")!.click();
};

// A stateful leaf child inside client-owned structure: its state and
// handlers are pure client concerns and survive interleaved patches.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, toggle, count, {}, count, {}],
};
