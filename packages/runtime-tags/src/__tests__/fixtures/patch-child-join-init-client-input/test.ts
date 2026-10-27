import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A hole joins a server input with one the caller passes client state: the
// patch leaves the hole, and the scope re-runs the join by its init.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x" }, click, { a: "y" }, click, { a: "z" }],
};
