import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root arrow over server input EMBEDDED in a composite value: the fill
// ships the object as data with the function as a bind-deposit reference
// (`_._.b(n)`), so calls after a patch read the live title.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
