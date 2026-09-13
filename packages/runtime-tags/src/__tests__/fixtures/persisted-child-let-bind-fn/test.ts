import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A bound `<let>` assigned inside an async const the client invokes: the
// parent's change function serializes for it.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}],
};
