import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root-declared arrow over server input, called inside client-owned
// structure: the fill delivers the re-bound function, so calls after a
// patch read the live title.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
