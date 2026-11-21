import type { TestConfig } from "../../main.test";

const click = (document: Document) => document.querySelector("button")!.click();

export const config: TestConfig = {
  steps: [{ prefix: "h", level: 2 }, click],
};
