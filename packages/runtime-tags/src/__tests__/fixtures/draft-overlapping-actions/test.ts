import type { TestConfig } from "../../main.test";
import { after } from "../../utils/resolve";

function clickBoth(container: Element) {
  container.querySelector<HTMLButtonElement>("#fast")!.click();
  container.querySelector<HTMLButtonElement>("#slow")!.click();
}

// Two acts hold guesses on the same draft at once: the newest write shows, the
// fast act settling only drops its own entry (the slow guess keeps showing),
// and once both settle the draft re-derives from the confirmed source.
export const config: TestConfig = {
  steps: [{}, clickBoth, after(1), after(2)],
};
