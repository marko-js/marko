import type { TestConfig } from "../../main.test";
import { flushHas, wait } from "../../utils/resolve";

// `ChildA` and `ChildB` share the `.shared` selector. Once it matches (loading
// `ChildA`), the selector stays matched, so rendering `ChildB` afterwards loads
// it immediately -- note there is no `flushHas` between `showB` and `ChildB`
// appearing.
export const config: TestConfig = {
  steps: [{}, wait, flushHas, wait, showB, wait],
  equivalent: false,
};

function showB(container: Element) {
  container.querySelector("button")!.click();
}
