import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The same, kept by the component in a `<let>`.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
