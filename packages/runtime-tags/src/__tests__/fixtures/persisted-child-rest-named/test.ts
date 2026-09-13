import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Named props peel beside a rest: the server label keeps its own group
// (plain text patch, no fill) while the rest blob stays a live-state
// recompute.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click],
};
