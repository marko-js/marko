import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A frame for a not-yet-loaded lazy child carries a handler bind on its
// ready channel: the bind materializes and validates when the batch drains.
const load = (document: Document) => {
  setTimeout(() => document.body.click());
};
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [{ title: "first" }, load, { title: "second" }, wait, click],
};
