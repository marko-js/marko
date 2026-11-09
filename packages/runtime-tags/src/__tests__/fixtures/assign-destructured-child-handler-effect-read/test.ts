import type { TestConfig } from "../../main.test";

const pick = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".pick")!.click();

export const config: TestConfig = {
  steps: [{}, pick],
};
