import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A dynamic tag given content in an `<await>` body: the promise creates no
// branch, so the tag's choices are not kept for the client to create.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ on: true, note: "a", p: Promise.resolve(1) }, toggle, toggle],
};
