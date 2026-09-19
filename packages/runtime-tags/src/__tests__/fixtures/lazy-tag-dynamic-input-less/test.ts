import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy template that reads no input has no params signal: the dynamic
// tag's input still has to land so the loaded content inserts.
export const config: TestConfig = {
  steps: [{}, wait, show, wait],
  equivalent: false,
};

function show(document: Document) {
  document.querySelector("button")!.click();
}
