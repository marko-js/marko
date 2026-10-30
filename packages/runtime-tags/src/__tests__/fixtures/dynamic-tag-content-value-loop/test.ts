import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The same, defined in a loop and reading the row's value.
export const config: TestConfig = {
  steps: [{ on: true, note: "a", items: ["x", "y"] }, toggle, toggle],
};
