import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` of a promise that reads no source, its value read by a handler
// and joined with input.
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  equivalent: false,
  steps: [{ name: "a", label: "A" }, wait, click],
};
