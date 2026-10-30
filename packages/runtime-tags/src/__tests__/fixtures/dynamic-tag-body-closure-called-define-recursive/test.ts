import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A define calling itself in its body: its closures are collected once.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
