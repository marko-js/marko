import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function value's body reads classify per group: the server-read suffix
// stays deliverable while the client-fed value keeps its live state.
export const config: TestConfig = {
  persisted: true,
  steps: [{ suffix: "!" }, click, { suffix: "?" }, click],
};
