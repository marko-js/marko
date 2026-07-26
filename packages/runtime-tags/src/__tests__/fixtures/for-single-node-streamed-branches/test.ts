import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Marker-elided single-node branches resume in two passes: the eager loop
// before the await, then the streamed loop after it. Each pass has to skip
// the markers it can actually see — the second pass' markers do not exist
// when the first one runs — so the streamed rows keep the start nodes that
// removing them depends on.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { head: ["h1", "h2"], mid: ["m1", "m2"], tail: ["t1", "t2", "t3"] },
    wait,
    toggle,
    toggle,
  ],
};
