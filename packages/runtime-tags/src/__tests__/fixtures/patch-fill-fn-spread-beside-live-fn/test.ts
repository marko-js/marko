import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-bound arrows after a spread of known length, beside a live bind
// (which keeps each owner's function record): each still re-binds.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
