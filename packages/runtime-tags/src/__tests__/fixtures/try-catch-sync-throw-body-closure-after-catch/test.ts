import type { TestConfig } from "../../main.test";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

// A section that subscribed to a closure before the body threw is gone once
// the catch renders, so a closure change never reaches it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, toggle],
};
