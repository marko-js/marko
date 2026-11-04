import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The same, with the tag picked through a `<const>`.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
