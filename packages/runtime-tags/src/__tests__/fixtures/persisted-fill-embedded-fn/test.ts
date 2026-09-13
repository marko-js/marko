import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A bound function EMBEDDED in a composite fill value rides the bind
// table: the fill refreshes the branch through the rebound function.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
