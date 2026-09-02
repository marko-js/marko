import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread argument for a child inside client-owned structure fills at the
// parent and re-applies through the tag-args signal.
export const config: TestConfig = {
  persisted: true,
  steps: [{ parts: ["a"] }, { parts: ["b"] }, click, click, { parts: ["c"] }],
};
