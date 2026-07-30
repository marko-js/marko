import type { TestConfig } from "../../main";

const pickB = (document: Document) =>
  document.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, pickB],
};
