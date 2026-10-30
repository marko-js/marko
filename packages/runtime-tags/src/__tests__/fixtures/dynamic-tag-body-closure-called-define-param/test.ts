import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The called define's own param, read in a branch of its body, is no closure of
// the content: only what it reads from the content's owners is.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
