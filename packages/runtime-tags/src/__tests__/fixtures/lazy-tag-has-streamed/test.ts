import type { TestConfig } from "../../main.test";
import { after, flush, flushHas, wait } from "../../utils/resolve";

// The `has` trigger script runs in the first streamed chunk and inserts its
// sentinel element. This exercises that content streamed in later chunks
// still resumes (the shared resume TreeWalker must never end a sweep parked
// on a sentinel) both before and after the sentinel removes itself on match.
function clickA(container: Element) {
  container.querySelector<HTMLButtonElement>("button.a")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>("button.b")!.click();
}

export const config: TestConfig = {
  steps: [
    { value: 1 },
    flush,
    after(1),
    clickA,
    flushHas,
    wait,
    flush,
    after(2),
    clickB,
  ],
  equivalent: false,
};
