import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { label: "x" },
    (document: Document) => document.querySelectorAll("button")[0].click(),
    (document: Document) => document.querySelectorAll("button")[1].click(),
    (document: Document) => document.querySelectorAll("button")[2].click(),
  ],
};
