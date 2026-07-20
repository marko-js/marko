import type { TestConfig } from "../../main.test";

const clickShow = (document: Document) =>
  document.querySelectorAll("button")[0].click();
const clickAppend = (document: Document) =>
  document.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, clickAppend, clickAppend, clickShow],
};
