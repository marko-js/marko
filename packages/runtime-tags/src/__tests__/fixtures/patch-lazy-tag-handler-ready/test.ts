import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Flushes for a not-yet-loaded lazy child carry handler binds: each held
// flush's binds materialize and validate as it applies, two flushes waiting
// on the module included.
const load = (document: Document) => {
  setTimeout(() => document.body.click());
};
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  patches: true,
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
