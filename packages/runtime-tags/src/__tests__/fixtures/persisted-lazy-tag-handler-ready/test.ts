import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Flushes for a not-yet-loaded lazy child carry handler binds on its ready
// channel: each flush's binds materialize and validate when the batch
// drains, two flushes pending on the channel included.
const load = (document: Document) => {
  setTimeout(() => document.body.click());
};
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "first" },
    load,
    { title: "second" },
    { title: "third" },
    wait,
    click,
  ],
};
