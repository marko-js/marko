import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch reading client state ships no shell: it could not construct
// faithfully, so diverging to it rejects the patch (a document navigation,
// which ends the run).
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store", show: "" }, click, { title: "Store", show: "yes" }],
};
