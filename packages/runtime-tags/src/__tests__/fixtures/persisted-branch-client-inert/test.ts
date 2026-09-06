import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A source-free call inside client-owned structure renders with ordinary
// client semantics: the client evaluates it when it renders the branch and
// patches never touch it.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, {}],
};
