import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Same as lazy-tag-sibling-binding but the sibling modules complete in
// reverse document order (B before S). B's re-derived access path for
// `shared.inner` must not depend on S's stream having been processed.
export const config: TestConfig = {
  steps: [{}, wait, wait, clickS, clickB],
  equivalent: false,
  load_order: ["child-b.marko.load.mjs", "child-s.marko.load.mjs"],
};

function clickS(container: Element) {
  container.querySelector<HTMLButtonElement>(".s")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>(".b")!.click();
}
