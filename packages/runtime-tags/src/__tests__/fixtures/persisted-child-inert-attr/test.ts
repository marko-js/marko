import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A source-free call beside client state in one input group: the client
// tag-args signal owns the group, so it evaluates the call client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
