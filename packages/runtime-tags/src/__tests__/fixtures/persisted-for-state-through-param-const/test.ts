import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A loop selected by state through a param-only const (`ws`): the client
// recomputes `shown` from `sessions` and the const the patch keeps current.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { workspace: { sessions: [{ id: "a" }, { id: "b" }] }, active: true },
    { workspace: { sessions: [{ id: "a" }, { id: "b" }] }, active: false },
    click,
    { workspace: { sessions: [{ id: "d" }] }, active: true },
    { workspace: null, active: true },
  ],
};
