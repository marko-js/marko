import type { TestConfig } from "../../main.test";

const rename = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An attribute tag row's loop param, joined with a value its caller passes client
// state: a patch writes the param and re-runs the join on the kept row.
export const config: TestConfig = {
  patches: true,
  steps: [{ items: ["a"] }, { items: ["b"] }, rename, { items: ["d", "e"] }],
};
