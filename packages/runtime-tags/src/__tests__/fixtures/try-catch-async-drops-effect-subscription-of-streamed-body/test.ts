import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

// The caught body subscribed to a closure through a resume effect that ran
// before its `@catch` fired, so the closure change must not reach it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, toggle],
};
