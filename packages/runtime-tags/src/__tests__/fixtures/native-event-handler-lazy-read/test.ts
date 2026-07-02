import type { TestConfig } from "../../main.test";

const clickShow = (container: Element) =>
  container.querySelectorAll("button")[0].click();
const clickAppend = (container: Element) =>
  container.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, clickAppend, clickAppend, clickShow],
};
