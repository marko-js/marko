import type { TestConfig } from "../../main.test";

const inc = (document: Document) =>
  document.querySelectorAll("button")[3].click();
const pick2 = (document: Document) =>
  document.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, inc, inc, pick2],
};
