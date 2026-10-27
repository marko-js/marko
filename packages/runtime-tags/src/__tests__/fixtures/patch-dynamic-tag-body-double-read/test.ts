import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
// A body its renderer renders in patched structure and again under its state
// takes a patch's value of what it reads in both.
export const config: TestConfig = {
  patches: true,
  steps: [{ on: true, note: "a" }, { on: true, note: "b" }, toggle],
};
