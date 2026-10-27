import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A destructured server-bound arrow beside a live bind, which keeps each
// owner's function record: the destructured one still re-binds on a change.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
