import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A destructured server-bound arrow fed to an admitted child: the alias
// chain still marks the fill function-carrying, so patches re-bind
// instead of navigating.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
