import type { TestConfig } from "../../main.test";

const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// 22 static siblings before the dynamic one: a `next` run in the 20-24 range,
// which the encoder packs into a single character.
export const config: TestConfig = {
  steps: [{}, bump],
};
